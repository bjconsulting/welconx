import NextImgSrc from './NextImgSrc';
import React, { ChangeEventHandler, FormEventHandler, FormEvent, FocusEventHandler } from 'react';

interface Props {
    setSend: (isSent: boolean) => void;
}

export default function Form(props: Props) {
    const isValidBrazilianMobileNumber = (number: string) => {
        const validDdd = /^((1[1-9])|(2[12478])|(3[1-5]|[37-8])|(4[1-9])|(5[134]|[1-9])|(6[1-9])|(7[1-35-79])|(8[1-9])|(9[1-9]))/;
        
        // Remove non-numeric characters
        const cleanedNumber = number.replace(/\D+/g, '');
        
        // Regular expression to validate Brazilian mobile numbers
        // Assumes the number starts with 9 and has a total length of 11 digits (including the area code)
        const brMobileNumber = /^(\d{2})9\d{8}$/;
        
        // Check if all digits are the same
        const allDigitsSame = /^(\d)\1+$/;
        const allDigitsSame2 = /^(?:\d{2})(\d)\1+$/;
        
        // Check for repeating 2-digit patterns
        const repeatingPattern = /^(\d{2})\1+$/;
        
        return (
            validDdd.test(cleanedNumber) &&
            brMobileNumber.test(cleanedNumber) &&
            !allDigitsSame.test(cleanedNumber) &&
            !allDigitsSame2.test(cleanedNumber) &&
            !repeatingPattern.test(cleanedNumber.slice(2)) // Ignore the area code for this check
        );
    }
    
    const checkTel: ChangeEventHandler<HTMLInputElement> = async (event) => {
        const telInput = event.target
        if (!isValidBrazilianMobileNumber(telInput.value)) {
            telInput.setCustomValidity('Telefone inválido.')
        } else {
            telInput.setCustomValidity('')
        }
        telInput.reportValidity()
    }
    
    const checkForm = async (form: HTMLFormElement) => {
        if (!form.checkValidity()) {
            alert('Dados inválidos. Por favor reveja as informações do formulário.')
            return false
        }
        return true
    }
    
    const mobileNumberOnInput: FormEventHandler<HTMLInputElement> = async (event) => {
        const input = event.target as HTMLInputElement
        let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
        
        // Apply the mask
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Add area code parentheses
        value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Add a dash after the 5th digit
        
        // Limit the input length
        value = value.slice(0, 15);
        
        input.value = value;
    }
    
    const mobileNumberOnBlur: FocusEventHandler<HTMLInputElement> = async (event) => {
        const input = event.target
        if (input.value.length === 2) {
            input.value = '';
        }
    }

    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault()
        event.stopPropagation()

        debugger

        const form = event.target as HTMLFormElement

        const isOk = await checkForm(form)
        if (!isOk) return

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

            (function(){window.dataLayer.push({'event':'lead_enviado'});console.log('Lead enviado topo!')})();

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
                    <input type="tel" name='celular' placeholder='Digite seu telefone' required minLength={9} onChange={checkTel} onInput={mobileNumberOnInput} onBlur={mobileNumberOnBlur} />
                </div>

        
                <button className="bg-[#D0A388] items-center px-[70px] mx-auto laptop:mx-0 py-[15px] rounded-3xl uppercase text-white font-bold text-[13.81px] hover:bg-[#94725E]" aria-label='Enviar dados do formulário'>
                    <p>enviar</p>
                </button>

            </div>
            <div className='my-4 flex flex-row items-center justify-center gap-2'>

                <label htmlFor="aceito" className='text-white font-normal relative text-[0.6em] flex justify-start items-center gap-2'>
                    <input type="checkbox" id='aceito' name='aceito' required />
                    <p> Concordo com a <a href='https://conx.com.br/politica-de-privacidade/' target='_blank' className="underline hover:text-sub" rel="noreferrer">Política de Privacidade.</a></p>
                </label>

            </div>

        </form>
    )
}