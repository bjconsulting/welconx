import React from 'react'
import { GiWashingMachine } from "react-icons/gi";
import { RiStoreLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { BsBicycle } from "react-icons/bs";
import img from './img/market.jpg'

function Dobra5() {
    return(
        <div className='bg-[rgba(243,_232,_225,_.64)] w-screen'>
            <div className='m-r flex flex-col mx-auto py-[2em]'>
                <h2 className='text-[#243548] text-[2.4em] text-center font-bold max-w-[800px] mx-auto mb-9'>
                    Seja para morar ou investir, diferenciais que surpreendem.
                </h2>

                <div className='flex flex-col laptop:flex-row gap-32 mx-auto justify-center'>
                    
                    <img className=' basis-[50%] aspect-auto max-w-[200px] laptop:max-w-[400px] desktop:max-w-[600px]' src={img} alt="Mini Market" />

                    <div className="basis-[50%] flex flex-col gap-6">
                        <div className="flex flex-row justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <GiWashingMachine className='w-8 h-8 fill-sub'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-left font-semibold'>Lavanderia compartilhada</h3>
                                <p className=' text-[#6D7280] text-left'>Completa e equipada com tecnologia de ponta para facilitar ainda mais a sua rotina.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <RiStoreLine className='w-8 h-8 fill-sub' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-left font-semibold'>Mini market</h3>
                                <p className=' text-[#6D7280] text-left'>Produtos que não podem faltar, disponíveis  para você 24 horas por dia, 7 dias por semana.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <FiPackage className='w-8 h-8  stroke-sub' />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <h3 className=' text-[#111827] text-left font-semibold'>Espaço delivery</h3>
                                <p className=' text-[#6D7280] text-left'>Mais facilidade e segurança para receber suas encomendas.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-4">
                            <div className='p-6 rounded-full bg-prim'>
                                <BsBicycle className='w-8 h-8 fill-sub' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-left font-semibold'>Bike elétrica compartilhada</h3>
                                <p className=' text-[#6D7280] text-left'>Praticidade que favorece sua saúde, otimiza sua locomoção e a preservação do meio ambiente..</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Dobra5;