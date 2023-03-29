import { useState } from "react";
import FormTopo from "./FormTopo";
import ThankYouTopo from "./ThankYouTopo";

export default function DobraForm() {
    const [isSent, setSend] = useState<boolean>(false)

    return (
        <div className="w-screen bg-prim ">
            <div className="p-4 flex flex-col mx-auto px-[5%]">

                {
                    isSent
                        ? <ThankYouTopo />
                        : 
                            <>
                                <h3 className="text-lg font-bold text-white mb-5 pl-1 text-center">
                                    Gostaria de ter mais informações? Preencha os dados abaixo e nossa equipe de especialistas entrará em contato.
                                </h3>
                                <FormTopo setSend={setSend} />
                            </>
                }
            </div>
        </div>
    )
}
