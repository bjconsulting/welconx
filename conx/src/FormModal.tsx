import NextImgSrc from './NextImgSrc';

interface Props {
  setSend: (isSent: boolean) => void;
}

declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}

export default function FormModal(props: Props) {
  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const base = window.location.pathname

      const url = base.endsWith('/')
                  ? `${base}email/form.php`
                  : `${base}/email/form.php`

      const response = await fetch(url, {
        method: 'POST',
        body: formData
      })
      
      if (response.status !== 200) {
        const data = await response.text()
        console.log(data)
        throw new Error(`Resposta inesperada! ${response.status}`);
      }

      (function(){window.dataLayer.push({'event':'lead_enviado'});console.log('Lead enviado modal/pop!')})();

      props.setSend(true)

    } catch (error) {

      console.error(error)
      alert("Erro inesperado. Por favor, tente novamente mais tarde!")

    }

  }

  return(
    <form onSubmit={submitForm}>
        <div className='container-input relative flex flex-row '>
            <div className=' p-4 flex'>
                <img src={NextImgSrc("img/User.svg")} alt="Usuário" width='30' height='30' loading='lazy' />
            </div>
            <span className='pipe'>
                |
            </span>
            <input type="text" name='nome' placeholder='Digite seu nome' required />
        </div>

        <div className='container-input relative flex flex-row '>
            <div className='p-4 flex'>
                <img src={NextImgSrc("img/ChatsCircle.svg")} alt="Como voce gostaria de receber o contato?" width='30' height='30' loading='lazy' />
            </div>
            <span className='pipe'>
                |
            </span>
            <select name='contato' required className='mr-6 bg-white' defaultValue={''}>
                <option value={''} disabled>Como gostaria de receber o contato?</option>
                <option value="E-mail"> E-mail </option>
                <option value="WhatsApp"> WhatsApp </option>
                <option value="Ligação">Ligação</option>
                <option value="Não receber contato">Não receber contato</option>
            </select>
        </div>

        <div className='container-input relative flex flex-row '>
            <div className=' p-4 flex'>
                <img src={NextImgSrc("img/Envelope.svg")} alt="E-mail" width='30' height='30' loading='lazy' />
            </div>
            <span className='pipe'>
                |
            </span>
            <input type="email" name='email' placeholder='Digite seu E-mail' required />
        </div>

        <div className='container-input relative flex flex-row '>
            <div className=' p-4 flex'>
                <img src={NextImgSrc("img/Phone.svg")} alt="Contato" width='30' height='30' loading='lazy' />
            </div>
            <span className='pipe'>
                |
            </span>
            <input type="tel" name='celular' placeholder='Digite seu telefone' required minLength={9} />
        </div>

        <div className='container-input relative flex flex-row '>
            <textarea name='mensagem' placeholder='Mensagem' className='resize-none pt-4 pl-4 min-h-[100px]' />
        </div>

        <label htmlFor="aceito" className='text-white font-normal relative text-[0.6em] flex justify-start items-center gap-2'>
            <input type="checkbox" id='aceito' name='aceito' required />
            <p> Concordo com a <a href='https://conx.com.br/politica-de-privacidade/' target='_blank' className="underline hover:text-sub" rel="noreferrer">Política de Privacidade.</a></p>
        </label>

        <button className="bg-[#D0A388] items-center px-[71.55px] mx-auto laptop:mx-0 py-[15.4px] rounded-2xl uppercase text-white font-bold text-[13.81px] mt-3 hover:bg-[#94725E]" aria-label='Enviar dados do formulário'>
            <p>enviar</p>
        </button>

    </form>
  )
}