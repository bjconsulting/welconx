import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Form from './Form';
import ThankYou from './ThankYou';

function Dobra8(){
    const [isSent, setSend] = useState<boolean>(false)

    return(
        <div className="laptop:mx-16 my-8" id='contato'>
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
                    {
                        !isSent
                        ? <ThankYou />
                        : <Form setSend={setSend} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Dobra8;