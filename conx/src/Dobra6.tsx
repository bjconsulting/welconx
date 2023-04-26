import React, { MouseEvent } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Carousel from './Carousel';
import NextImgSrc from './NextImgSrc';

function Dobra6(){

    const panel = React.useRef<HTMLDivElement>(null)

    const prev = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
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

    const next = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        if (!panel.current) return

        const container = panel.current
        const items = container.querySelectorAll('.snap-start') as NodeListOf<HTMLDivElement>
        const containerRect = container.getBoundingClientRect()
        const currentItemIndex = Math.round(container.scrollLeft / containerRect.width)

        if (currentItemIndex < items.length - 1) {
            const nextItem = items[currentItemIndex + 1]
            const nextItemRect = nextItem.getBoundingClientRect()
            container.scrollBy({ left: nextItemRect.left - containerRect.left, behavior: 'smooth' })
        }
    }

    return(
        <div className="flex flex-col gap-24 py-10 justify-center items-center laptop:pb-56" id='planta'>
            <h2 className=" font-bold text-[1.7em] laptop:text-[2.4em] text-[#111827] text-center laptop:max-w-[55%]">
                Plantas desenhadas e projetadas para proporcionar a melhor experiência de viver.
            </h2>

            <div className='relative mt-10 laptop:mt-0'>
                <Carousel navButtonBgColor='bg-sub' navButtonFillColor='fill-[#D0A388]' className='relative mx-auto image-container hide-scroll overflow-x-scroll scroll-smooth snap-x snap-mandatory snap-always max-w-[300px] laptop:max-w-[700px]'>
                    <div className="relative snap-start flex flex-col gap-4 justify-center items-center w-[754px] max-w-[300px] shrink-0 laptop:max-w-[700px]">
                        <h3 className="uppercase font-bold text-sub text-2xl text-center">
                            STUDIO | 31 m²
                        </h3>

                        <div className="flex flex-col justify-center items-center relative">
                            <picture>
                                <source srcSet={NextImgSrc("img/planta1.avif")} type='image/avif'/>
                                <source srcSet={NextImgSrc("img/planta1.webp")} type='image/webp'/>
                                <img src={NextImgSrc("img/planta1.jpg")} alt="Studio 31 m²" loading='lazy' className='w-full' />
                            </picture>
                        </div>

                        <p className='uppercase text-[#6D7280] text-xs text-center font-normal'>
                            planta ilustrada do studio de 31 m²
                        </p>

                    </div>

                    <div className="relative snap-start flex flex-col gap-4 justify-center items-center">
                        <h3 className="uppercase font-bold text-sub text-2xl text-center">
                            APARTAMENTO | 31 m²
                        </h3>

                        <div className="flex flex-col justify-center items-center relative w-[754px] max-w-[300px] shrink-0 laptop:max-w-[700px]">
                            <picture>
                                <source srcSet={NextImgSrc("img/planta2.avif")} type='image/avif'/>
                                <source srcSet={NextImgSrc("img/planta2.webp")} type='image/webp'/>
                                <img src={NextImgSrc("img/planta2.jpg")} alt="Apartamento 31 m²" loading='lazy' className='w-full' />
                            </picture>
                        </div>

                        <p className='uppercase text-[#6D7280] text-xs text-center font-normal'>
                            planta ilustrada do apartamento de 31 m²
                        </p>

                    </div>
                </Carousel>
            </div>
            <h3 className='font-bold text-[1.7em] laptop:text-[2.4em] text-[#111827] text-center  '>Faça um tour virtual no decorado</h3>
            <iframe src="https://tour.piperz.io/EbwyqjhtzeZ" allow="xr-spatial-tracking" className='w-full aspect-[16/9] laptop:aspect-[16/5]'></iframe>

        </div>
    )
}

export default Dobra6;