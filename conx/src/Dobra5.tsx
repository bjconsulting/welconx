import * as React from 'react';
// import Glider from 'react-glider';
// import 'glider-js/glider.min.css';

import { GiWashingMachine } from "react-icons/gi";
import { RiStoreLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { BsBicycle } from "react-icons/bs";
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";
import img from './img/market.jpg'
import well from './img/well-services.png'
// import img2 from './img/lavanderia.jpg'

function Dobra5() {
    return(
        <div className='bg-[rgba(243,_232,_225,_.64)] w-screen'>
            <div className='m-r flex flex-col mx-auto py-[2em] gap-12'>
                <h2 className='text-[#243548] text-[1.4em] laptop:text-[2.4em] text-center font-bold max-w-[800px] mx-auto mb-9'>
                    Seja para morar ou investir, diferenciais que surpreendem.
                </h2>

                <div className='flex flex-col laptop:flex-row gap-32 mx-auto justify-center'>
                    <div className='left-container relative h-auto'>
                        <div className='relative image-container'>
                            <img className=' aspect-auto max-w-[250px] laptop:max-w-[400px] desktop:max-w-[700px] mx-auto' src={img} alt="Mini Market" />
                            <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada do Mini Market</p>
                            {/* <div className='p-2 tablet:p-4 rounded-full bg-[#FEFEFE] opacity-80 absolute top-[45%] right-8 hover:opacity-100 cursor-pointer'>
                                <GrNext className='fill-prim'/>
                            </div>
                            
                            <div className='p-2 tablet:p-4 rounded-full bg-[#FEFEFE] opacity-80 absolute top-[45%] left-8 hover:opacity-100 cursor-pointer'>
                                <GrPrevious className='fill-prim'/>
                            </div> */}
                        </div>


                        <img src={well} alt="Well Services" className='max-w-[300px] mt-6 mx-auto' />
                    </div>

                    <div className="basis-[50%] flex flex-col gap-6">
                        <div className="flex flex-col tablet:flex-row tablet:justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <GiWashingMachine className='w-8 h-8 fill-sub'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-center tablet:text-left font-semibold'>Lavanderia compartilhada</h3>
                                <p className=' text-[#6D7280] text-center tablet:text-left'>Completa e equipada com tecnologia de ponta para facilitar ainda mais a sua rotina.</p>
                            </div>
                        </div>

                        <div className="flex flex-col tablet:flex-row justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <RiStoreLine className='w-8 h-8 fill-sub' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-center tablet:text-left font-semibold'>Mini market</h3>
                                <p className=' text-[#6D7280] text-center tablet:text-left'>Produtos que n??o podem faltar, dispon??veis?? para voc?? 24 horas por dia, 7 dias por semana.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col tablet:flex-row justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <FiPackage className='w-8 h-8  stroke-sub' />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <h3 className=' text-[#111827] text-center tablet:text-left font-semibold'>Espa??o delivery</h3>
                                <p className=' text-[#6D7280] text-center tablet:text-left'>Mais facilidade e seguran??a para receber suas encomendas.</p>
                            </div>
                        </div>

                        <div className="flex flex-col tablet:flex-row justify-start items-center gap-4">
                            <div className='p-6 rounded-full bg-prim'>
                                <BsBicycle className='w-8 h-8 fill-sub' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-center tablet:text-left font-semibold'>Bike el??trica compartilhada</h3>
                                <p className=' text-[#6D7280] text-center tablet:text-left'>Praticidade que favorece sua sa??de, otimiza sua locomo????o e a preserva????o do meio ambiente..</p>
                            </div>
                        </div>
                    </div>

                </div>

                <button className='button_d5 rounded-md flex flex-row justify-center items-center px-5 py-6 max-w-[320px] bg-[#465361] text-sub font-bold uppercase mx-auto hover:bg-slate-800'
                    onClick={() => { document.querySelector("#contato")?.scrollIntoView({ block: 'start' }) }}>
                    Fale com um consultor
                </button>

            </div>
        </div>
    )
}


export default Dobra5;