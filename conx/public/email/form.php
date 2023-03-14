<?php 
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);

//var_dump($GLOBALS);

$referer = $_SERVER['HTTP_REFERER'];
$url = parse_url($referer);
$query = $url['query'];
parse_str($query, $params);

echo $referer . "\n\n";

print_r($params);

echo "\n\n";

function GetPostSafe($key, $params = null) {
    if (is_null($params)) {
        $params = $_POST;
    }
    if (isset($params[$key])) {
        return $params[$key];
    }
    return '';
}

function GetPostSafeConcat($key, $params = null) {
    if (is_null($params)) {
        $params = $_POST;
    }
    if (isset($params[$key])) {
        return '-' . $params[$key];
    }
    return '';
}

function GetPostSafeConcat2($key, $params = null) {
    if (is_null($params)) {
        $params = $_POST;
    }
    if (isset($params[$key])) {
        return $params[$key] . '-';
    }
    return '';
}

function GetPostSafeOrganico($key, $params = null) {
    if (is_null($params)) {
        $params = $_POST;
    }
    if (isset($params[$key])) {
        return $params[$key];
    }
    return 'organico';
}

try {
    $campanha = GetPostSafe('utm_source', $params);

    $request_headers = apache_request_headers();
} catch(Exception $e) {
    print_r($e);
}

try {
    EnviaLeadSigavi360($campanha, $request_headers['Cookie'], $params);
} catch(Exception $e) {
    print_r($e);
}

try {
    EnviaZapier($campanha, $params);
} catch(Exception $e) {
    print_r($e);
}

try {
    if (GetPostSafe("nome_form") == "Formulario: Kit Informantivo") {
        $parse_uri = explode('wp-content', $_SERVER['SCRIPT_FILENAME']);
        require_once($parse_uri[0] . 'wp-load.php');
        
        echo "Kit Informativo\n";

        $template_file = fopen("email/email.html", "r") or die("Unable to open file!");
        $template = fread($template_file,filesize("email/email.html"));
        fclose($template_file);

        $nome = htmlspecialchars(ucfirst(GetPostSafe("nome") ?? ''));
        $nome = explode(' ', $nome, 2)[0];
        $template = str_replace('$nome$', $nome, $template);

        $headers = array('Content-Type: text/html; charset=UTF-8',
            'From: '.get_the_title().' <leads@conx.com.br>;'
        );
        
        wp_mail( GetPostSafe("email"), 'Seu kit informativo chegou, ' . $nome, $template, $headers );
    }
} catch(Exception $e) {
    print_r($e);
}


function EnviaZapier($campanha, $params) {
    $url = "https://hooks.zapier.com/hooks/catch/8493391/3beuarb/";

    $data = array(
        "nome" => GetPostSafe('nome'), 
        "telefone" => GetPostSafe('celular'), 
        "email" => GetPostSafe('email'), 
        "objetivo" => '', //GetPostSafe("objetivo"), 
        "contato" => GetPostSafe("contato"), 
        "campanha" => GetPostSafe('utm_campaign', $params),
        "termo" => GetPostSafe('utm_term', $params),
        "conteudo" => GetPostSafe('utm_content', $params),
        "midia" => GetPostSafe('utm_medium', $params),
        "origem" => GetPostSafe('utm_source', $params)
    );

    echo "\nZapier:\n";
    print_r($data); echo "\n";

    $data_string = json_encode($data);     
    
    $ch = curl_init($url);  
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);     
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
        'Content-Type: application/json',                                                                                
        'Content-Length: ' . strlen($data_string))                                                                       
    );                         

    $response = curl_exec($ch);
    
    // verifica errors.
    if(curl_errno($ch)){    
        throw new Exception(curl_error($ch));
    }

    // verifica retorno da API do Sigavi 360
    $response = EscapeJsonString($response);
    $response = json_decode($response,true);

    echo 'Status: ' . $response['status'] . " \nId: " . $response['id'] . "\n";
}

function EnviaLeadSigavi360($campanha, $cookie, $params){
    $url = "https://conx.sigavi360.com.br/Sigavi/api/V2/Leads/NovoLead";
    $username = 'Integracao';
    $password = 'RuryHhN4IiE9rfT';
    
    $message = GetPostSafe("contato").'-'.GetPostSafe('utm_campaign', $params).'-'.GetPostSafe('utm_term', $params).'-'.GetPostSafe('utm_content', $params).'-'.GetPostSafe('mensagem');
    
    $data = array(
        "nome" => GetPostSafe('nome'), 
        "telefone" => GetPostSafe('celular'), 
        "email" => GetPostSafe('email'), 
        "mensagem" => $message, 
        "campanha" => GetPostSafeConcat2('utm_source', $params).GetPostSafeOrganico('utm_medium', $params),
        "referencia" => '1163'
    );

    print_r($data); echo "\n";
    
    $data_string = json_encode($data);     
    
    $ch = curl_init($url);  
    curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($data_string),
        'Cookie: ' . $cookie)
    );                         

    $response = curl_exec($ch);

    // verifica errors.
    if(curl_errno($ch)){    
        throw new Exception(curl_error($ch));
    }

    // verifica retorno da API do Sigavi 360
    $response = EscapeJsonString($response);
    $response = json_decode($response,true);
    
    if($response['Sucesso'] == 1)
    {
        echo 'Sucesso, IdSigavi:' . $response['Id'] . '\n';
    }
    else{
        echo 'Ocorreu um erro: ' . $response['Erros'][0] . '\n';
    }
}

function EscapeJsonString($value) { 
    $escapers = array("\'");
    $replacements = array("\\/");
    $result = str_replace($escapers, $replacements, $value);
    return $result;
}

try {
    $nome_form = GetPostSafe("nome");
    if($nome_form!=null){ $nome_Body = '<b>Nome:</b> '.$nome_form.'<br/>'; }
    $email_form = GetPostSafe("email");
    if($email_form!=null){ $email_Body = '<b>Email:</b> '.$email_form.'<br/>'; }
    $celular = GetPostSafe("celular");
    if($celular!=null){ $celular_Body = '<b>Celular:</b> '.$celular.'<br/>'; }
    $contato = GetPostSafe("contato");
    if($contato!=null){ $contato_Body = '<b>Como gostaria de receber o contato:</b> '.$contato.'<br/>'; }
    $mensagem = GetPostSafe("mensagem");
    if($mensagem!=null){ $mensagem_Body = '<b>Mensagem:</b> '.$mensagem.' - '.$contato_Body.'<br/>'; }

    $email = 'leads@conx.com.br';
    $to = $email;
    $subject = GetPostSafe("nome_form") . ' - Pinheiros';

    echo "Subject: $subject\n";

    // prepare email body text
    $Body = '<div style="position:relative;margin:1rem auto;width:90%;border-radius:.5rem;background:#f5f5f5;border:1px solid #bbb;overflow:hidden"><div style="width:100%;font-size:1.2em;padding:1rem;background:#2154b2;color:#fff;box-sizing:border-box;">Formulário: <u>Contato</u></div><div style="width:100%;font-size:1.4em;line-height:1.8em;padding:2rem;">
    '.$nome_Body.'
    '.$email_Body.'
    '.$celular_Body.'
    '.$mensagem_Body.'
    '.$campanha.'
    </div>';

    $headers = array('Content-Type: text/html; charset=UTF-8',
        // 'From: '.get_the_title().' <contato@wsidm.com.br>;',
        'From: leads@conx.com.br',
        'Reply-To: '.$nome.' <'.$email.'>'
    );

    mail($to, $subject, $Body, implode("\r\n", $headers));
    //wp_mail( $to, $subject, $Body, $headers );

} catch(Exception $e) {
    print_r($e);
}
?>