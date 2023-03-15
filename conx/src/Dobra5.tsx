import * as React from 'react';
// import Glider from 'react-glider';
// import 'glider-js/glider.min.css';

import { GiWashingMachine } from "react-icons/gi";
import { RiStoreLine } from "react-icons/ri";
import { FiPackage } from "react-icons/fi";
import { BsBicycle } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import NextImgSrc from './NextImgSrc';

function Dobra5() {

    const panel = React.useRef<HTMLDivElement>(null)

    const prev = () => {
        if (!panel.current) return

        const container = panel.current
        const items = container.querySelectorAll('.snap-start') as NodeListOf<HTMLDivElement>
        const containerRect = container.getBoundingClientRect()
        const currentItemIndex = Math.round(container.scrollLeft / containerRect.width)

        if (currentItemIndex > 0) {
            const prevItem = items[currentItemIndex - 1]
            const prevItemRect = prevItem.getBoundingClientRect()
            container.scrollBy({ left: prevItemRect.left - containerRect.left, behavior: 'smooth' })
        }
    }

    const next = () => {
        if (!panel.current) return

        const container = panel.current
        const items = container.querySelectorAll('.snap-start') as NodeListOf<HTMLDivElement>
        const containerRect = container.getBoundingClientRect()
        const currentItemIndex = Math.round(container.scrollLeft / containerRect.width)

        if (currentItemIndex < items.length - 1) {
            const nextItem = items[currentItemIndex + 1]
            const nextItemRect = nextItem.getBoundingClientRect()
            container.scrollBy({ left: nextItemRect.left - containerRect.left, behavior: 'smooth' })
            console.log({container, scrollLeft:container.scrollLeft, left: nextItemRect.left - containerRect.left, behavior: 'smooth' })
        }
    }

    return (
        <div className='bg-[rgba(243,_232,_225,_.64)] w-screen'>
            <div className='m-r flex flex-col mx-auto py-[2em] gap-12'>
                <h2 className='text-[#243548] text-[1.4em] laptop:text-[2.4em] text-center font-bold max-w-[800px] mx-auto mb-9'>
                    Seja para morar ou investir, diferenciais que surpreendem.
                </h2>

                <div className='flex flex-col laptop:flex-row gap-20 mx-auto justify-center'>
                    <div className='left-container relative h-auto'>
                        <div ref={panel} className='relative image-container hide-scroll aspect-[1.333333333333333] overflow-x-scroll scroll-smooth snap-x snap-mandatory snap-always max-w-[326px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px]'>
                            <div className='flex flex-row'>
                                <div className='relative snap-start'>
                                    <picture>
                                        <source srcSet={NextImgSrc("img/lavanderia.avif")} type='image/avif' />
                                        <source srcSet={NextImgSrc("img/lavanderia.webp")} type='image/webp' />
                                        <img className=' aspect-[1.47] w-[700px] max-w-[326px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px] mx-auto' src={NextImgSrc("img/lavanderia.jpg")} alt="Lavanderia" loading='lazy' />
                                    </picture>
                                    <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada da Lavanderia</p>
                                </div>
                                <div className='relative snap-start'>
                                    <picture>
                                        <source srcSet={NextImgSrc("img/market.avif")} type='image/avif' />
                                        <source srcSet={NextImgSrc("img/market.webp")} type='image/webp' />
                                        <img className=' aspect-[1.47] w-[700px] max-w-[326px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px] mx-auto' src={NextImgSrc("img/market.jpg")} alt="Mini Market" loading='lazy' />
                                    </picture>
                                    <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada do Mini Market</p>
                                </div>
                                <div className='relative snap-start'>
                                    <picture>
                                        <source srcSet={NextImgSrc("img/delivery.avif")} type='image/avif' />
                                        <source srcSet={NextImgSrc("img/delivery.webp")} type='image/webp' />
                                        <img className=' aspect-[1.47] w-[700px] max-w-[326px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px] mx-auto' src={NextImgSrc("img/delivery.jpg")} alt="Espaço Delivery" loading='lazy' />
                                    </picture>
                                    <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada do Espaço Delivery</p>
                                </div>
                                <div className='relative snap-start'>
                                    <picture>
                                        <source srcSet={NextImgSrc("img/bike.avif")} type='image/avif' />
                                        <source srcSet={NextImgSrc("img/bike.webp")} type='image/webp' />
                                        <img className=' aspect-[1.47] w-[700px] max-w-[326px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px] mx-auto' src={NextImgSrc("img/bike.jpg")} alt="Bike Elétrica Compartilhada" loading='lazy' />
                                    </picture>
                                    <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada de Bike Elétrica Compartilhada</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 tablet:p-4 rounded-full bg-[#FEFEFE] opacity-80 absolute -mt-[50%] translate-y-1/2 right-8 hover:opacity-100 cursor-pointer' onClick={next}>
                            <GrNext className='fill-prim' />
                        </div>

                        <div className='p-2 tablet:p-4 rounded-full bg-[#FEFEFE] opacity-80 absolute -mt-[50%] translate-y-1/2 left-8 hover:opacity-100 cursor-pointer' onClick={prev}>
                            <GrPrevious className='fill-prim' />
                        </div>

                        <img src={NextImgSrc("img/well-services.png")} alt="Well Services" loading='lazy' className='max-w-[300px] mt-6 mx-auto' />
                    </div>

                    <div className="basis-[55%] flex flex-col gap-6">
                        <div className="flex flex-col tablet:flex-row tablet:justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <GiWashingMachine className='w-8 h-8 fill-sub' />
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
                                <p className=' text-[#6D7280] text-center tablet:text-left'>Produtos que não podem faltar, disponíveis para você 24 horas por dia, 7 dias por semana.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col tablet:flex-row justify-start items-center gap-4 border-e">
                            <div className='p-6 rounded-full bg-prim'>
                                <FiPackage className='w-8 h-8  stroke-sub' />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <h3 className=' text-[#111827] text-center tablet:text-left font-semibold'>Espaço delivery</h3>
                                <p className=' text-[#6D7280] text-center tablet:text-left'>Mais facilidade e segurança para receber suas encomendas.</p>
                            </div>
                        </div>

                        <div className="flex flex-col tablet:flex-row justify-start items-center gap-4">
                            <div className='p-6 rounded-full bg-prim'>
                                <BsBicycle className='w-8 h-8 fill-sub' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-center tablet:text-left font-semibold'>Bike elétrica compartilhada</h3>
                                <p className=' text-[#6D7280] text-center tablet:text-left'>Praticidade que favorece sua saúde, otimiza sua locomoção e a preservação do meio ambiente.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <a href="#form-contato" className='button_d5 rounded-md flex flex-row justify-center items-center px-3 py-6 max-w-[320px] bg-[#465361] text-sub font-bold uppercase mx-auto hover:bg-slate-800 tablet:px-5'>
                    Fale com um consultor
                </a>

            </div>
        </div>
    )
}


export default Dobra5;