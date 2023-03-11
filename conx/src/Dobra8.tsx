import { BsArrowRightShort } from 'react-icons/bs';
import user from './img/User.svg';
import chat from './img/ChatsCircle.svg';
import envelope from './img/Envelope.svg';
import phone from './img/Phone.svg';

function Dobra8(){

    return(
        <div className="laptop:mx-16 my-8">
            <div className="flex flex-col laptop:flex-row justify-center items-start bg-prim p-4 laptop:p-12 laptop:mx-32 rounded-none laptop:rounded-3xl form-bg">
                <div className="left flex flex-col justify-start items-start gap-12 basis-[45%] mt-[2em]">
                    <h4 className="font-bold text-[2em] text-center laptop:text-left text-[#FEFEFE]">
                        Vamos conversar e esclarecer todas as suas dúvidas sobre o seu futuro lar.
                    </h4>
                    <div className="bg-[#D0A388] button_f flex flex-row justify-around items-center px-14 mx-auto laptop:mx-0 py-2 gap-2 rounded-2xl uppercase text-white font-bold ">
                        <p>fale conosco</p> 
                        <BsArrowRightShort size={'2em'} className='fill-white rotate-90 laptop:rotate-0'/>
                    </div>
                </div>

                <div className='right basis-[45%] mt-12 laptop:mt-0 w-full'>
                    <form>
                        <div className='container-input relative flex flex-row '>
                            <div className=' p-4 flex'>
                                <img src={user} alt="user" width='30px' />
                            </div>
                            <span className='pipe'> 
                                |
                            </span>
                            <input type="text" name='Nome' placeholder='Digite seu nome' required/> 
                        </div>

                        <div className='container-input relative flex flex-row '>
                            <div className='p-4 flex'>
                                <img src={chat} alt="Como voce gostaria de receber o contato?" width='30px' />
                            </div>
                            <span className='pipe'>
                                |
                            </span>
                            <select  name='Contato'  required className='mr-6'>
                                <option disabled selected>Como gostaria de receber o contato?</option>
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
                            <input type="text" name='Nome' placeholder='Digite seu E-mail' required />
                        </div>

                        <div className='container-input relative flex flex-row '>
                            <div className=' p-4 flex'>
                                <img src={phone} alt="Contato" width='30px' />
                            </div>
                            <span className='pipe'>
                                |
                            </span>
                            <input type="text" name='Nome' placeholder='Digite seu telefone' required />
                        </div>
                       
                        <div className='container-input relative flex flex-row '>
                            <textarea name='mensagem' placeholder='Mensagem' className='resize-none pt-4 pl-4 min-h-[100px]'/>
                        </div>

                        <label htmlFor="check" className='text-white font-normal relative text-[0.6em] flex justify-start items-center gap-2'>
                            <input type="checkbox" id ='check'/>
                            <p> Concordo com a <a href='https://conx.com.br/politica-de-privacidade/' target='_blank' className="underline hover:text-sub" rel="noreferrer">Política de Privacidade.</a></p>
                        </label>

                        <button className="bg-[#D0A388] items-center px-[71.55px] mx-auto laptop:mx-0 py-[15.4px] rounded-2xl uppercase text-white font-bold text-[13.81px] mt-3 hover:bg-[#94725E]">
                            <p>enviar</p>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dobra8;