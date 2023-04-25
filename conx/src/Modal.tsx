import { useState } from "react";
import FormModal from "./FormModal";
import ThankYouTopo from "./ThankYouTopo";

function Modal() {
    const [isSent, setSend] = useState<boolean>(false)

    function closeWpp(): void {
        const modal = document.querySelector('.modal') as HTMLDivElement
        modal.style.display = 'none';
    }

    return(
        <div className="modal hidden w-screen h-screen fixed top-0 left-0 bg-slate-500 bg-opacity-80 justify-center items-center laptop:justify-end laptop:items-end z-50 p-20">
            <div className="laptop:max-w-[30%]">          
                {
                    isSent
                        ? <ThankYouTopo />
                        :
                        <>
                            <h3 className="pb-4 text-white text-center">
                                Insira seus dados abaixo e redirecionaremos imediatamente o seu contato.
                            </h3>
                            <FormModal setSend={setSend} />
                        </>
                }
            </div>
            <span className="text-[4rem] text-white absolute right-[5%] top-[5%] cursor-pointer"
            onClick={closeWpp}>
                &times;
            </span>
        </div>
    )

}

export default Modal;