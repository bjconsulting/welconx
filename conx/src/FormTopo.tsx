import NextImgSrc from './NextImgSrc';

interface Props {
    setSend: (isSent: boolean) => void;
}

export default function Form(props: Props) {
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

            props.setSend(true)

        } catch (error) {

            console.error(error)
            alert("Erro inesperado. Por favor, tente novamente mais tarde!")

        }

    }

    return (
        <form onSubmit={submitForm} className="flex flex-col max-w-full items-start justify-center">
            <div className='flex flex-col laptop:flex-row items-center container-input2 max-w-max'>
                <div className='container-input input2 mr-4 relative flex flex-row '>
                    <div className=' p-3 flex'>
                        <img src={NextImgSrc("img/User.svg")} alt="Usuário" width='25' height='25' loading='lazy' />
                    </div>
                    <span className='pipe'>
                        |
                    </span>
                    <input type="text" name='nome' placeholder='Digite seu nome' required />
                </div>

                <div className='container-input input2 mr-4 relative flex flex-row '>
                    <div className='p-3 flex'>
                        <img src={NextImgSrc("img/ChatsCircle.svg")} alt="Como voce gostaria de receber o contato?" width='25' height='25' loading='lazy' />
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

                <div className='container-input input2 mr-4 relative flex flex-row '>
                    <div className=' p-3 flex'>
                        <img src={NextImgSrc("img/Envelope.svg")} alt="E-mail" width='25' height='25' loading='lazy' />
                    </div>
                    <span className='pipe'>
                        |
                    </span>
                    <input type="email" name='email' placeholder='Digite seu E-mail' required />
                </div>

                <div className='container-input input2 mr-4 relative flex flex-row '>
                    <div className=' p-3 flex'>
                        <img src={NextImgSrc("img/Phone.svg")} alt="Contato" width='25' height='25' loading='lazy' />
                    </div>
                    <span className='pipe'>
                        |
                    </span>
                    <input type="tel" name='celular' placeholder='Digite seu telefone' required minLength={9} />
                </div>

        
                <button className="bg-[#D0A388] items-center px-[70px] mx-auto laptop:mx-0 py-[15px] rounded-3xl uppercase text-white font-bold text-[13.81px] hover:bg-[#94725E]" aria-label='Enviar dados do formulário'>
                    <p>enviar</p>
                </button>

            </div>
            <div className='my-4 flex flex-row items-center justify-center gap-2 mx-auto'>

                <label htmlFor="aceito" className='text-white font-normal relative text-[0.6em] flex justify-center items-center gap-2'>
                    <input type="checkbox" id='aceito' name='aceito' required />
                    <p> Concordo com a <a href='https://conx.com.br/politica-de-privacidade/' target='_blank' className="underline hover:text-sub" rel="noreferrer">Política de Privacidade.</a></p>
                </label>

            </div>

        </form>
    )
}