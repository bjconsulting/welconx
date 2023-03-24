<?php 
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);

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

    $email = 'bruno@bj-consulting.net'; //'leads@conx.com.br';
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