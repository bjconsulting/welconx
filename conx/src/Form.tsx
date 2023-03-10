import user from './img/User.svg';
import chat from './img/ChatsCircle.svg';
import envelope from './img/Envelope.svg';
import phone from './img/Phone.svg';

interface Props {
  setSend: (isSent: boolean) => void;
}

export default function Form(props: Props) {
  const submitForm = (event: React.FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    props.setSend(true)
  }

  return(
    <form onSubmit={submitForm}>
        <div className='container-input relative flex flex-row '>
            <div className=' p-4 flex'>
                <img src={user} alt="user" width='30px' />
            </div>
            <span className='pipe'>
                |
            </span>
            <input type="text" name='nome' placeholder='Digite seu nome' required />
        </div>

        <div className='container-input relative flex flex-row '>
            <div className='p-4 flex'>
                <img src={chat} alt="Como voce gostaria de receber o contato?" width='30px' />
            </div>
            <span className='pipe'>
                |
            </span>
            <select name='Contato' required className='mr-6 bg-white' defaultValue={''}>
                <option value={''} disabled>Como gostaria de receber o contato?</option>
                <option value="E-mail"> E-mail </option>
                <option value="WhatsApp"> WhatsApp </option>
                <option value="Ligação">Ligação</option>
                <option value="Não receber contato">Não receber contato</option>
            </select>
        </div>

        <div className='container-input relative flex flex-row '>
            <div className=' p-4 flex'>
                <img src={envelope} alt="E-mail" width='30px' />
            </div>
            <span className='pipe'>
                |
            </span>
            <input type="email" name='email' placeholder='Digite seu E-mail' required />
        </div>

        <div className='container-input relative flex flex-row '>
            <div className=' p-4 flex'>
                <img src={phone} alt="Contato" width='30px' />
            </div>
            <span className='pipe'>
                |
            </span>
            <input type="tel" name='phone' placeholder='Digite seu telefone' required />
        </div>

        <div className='container-input relative flex flex-row '>
            <textarea name='mensagem' placeholder='Mensagem' className='resize-none pt-4 pl-4 min-h-[100px]' />
        </div>

        <label htmlFor="check" className='text-white font-normal relative text-[0.6em] flex justify-start items-center gap-2'>
            <input type="checkbox" id='check' required />
            <p> Concordo com a <a href='https://conx.com.br/politica-de-privacidade/' target='_blank' className="underline hover:text-sub" rel="noreferrer">Política de Privacidade.</a></p>
        </label>

        <button className="bg-[#D0A388] items-center px-[71.55px] mx-auto laptop:mx-0 py-[15.4px] rounded-2xl uppercase text-white font-bold text-[13.81px] mt-3 hover:bg-[#94725E]">
            <p>enviar</p>
        </button>

    </form>
  )
}