import React, { useEffect } from 'react'
import CheckImgSupport from './CheckImgSupport'
import NextImgSrc from './NextImgSrc'

function Dobra2() {
    
    useEffect(() => CheckImgSupport('.bg-bg-2', 'bg-2.webp', 'bg-2.avif', 'bg-2.jpg') )

    return (
        <div className=' bg-bg-2 bg-cover'>

            <div className='flex m-r mx-auto flex-col desktop:flex-row justify-center items-center py-16 gap-12' id='local'>
                <div className='left basis-[45%] flex flex-col text-left justify-center items-start gap-12 desktop:basis-[55%]'>
                    <h2 className='text-[2em]  text-prim font-bold leading-[1.4em]'>
                        Você na sua melhor versão.<br />
                        Você no lugar certo.
                    </h2>
                    <p className='text-[1em] font-normal leading-[1.6em] max-w-[90%]'>
                        Seja qual for o seu estilo, ele é parte de um novo jeito de viver.<br />
                        Um bairro como Pinheiros, que abrange a pluralidade de etnias, gostos e costumes, só poderia oferecer o melhor das grandes cidades. Alta gastronomia, mobilidade, informação, cultura e experiências.
                    </p>
                </div>

                <div className='flex flex-col basis-[45%] items-start gap-1 justify-start'>

                    <div className='f-row flex  tablet:flex-row items-end justify-start gap-2'>
                        <div className='relative mobile-sm:basis-[130%] basis-[110%] tablet:basis-[60%] desktop:basis-[75%] desktop-big:basis-[60%] flex flex-end'>
                            <picture style={{width:'100%'}}>
                                <source srcSet={NextImgSrc("img/img1.avif")} type='image/avif'/>
                                <source srcSet={NextImgSrc("img/img1.webp")} type='image/webp'/>
                                <img src={NextImgSrc("img/img1.png")} alt="Shopping Iguatemi" width='100%' height='100%' loading='lazy' />
                            </picture>
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Shopping Iguatemi</p>
                        </div>
                        <div className='relative flex flex-row justify-start tablet:basis-[max-content]'>
                            <picture style={{width:'100%'}}>
                                <source srcSet={NextImgSrc("img/img2.avif")} type='image/avif'/>
                                <source srcSet={NextImgSrc("img/img2.webp")} type='image/webp'/>
                                <img src={NextImgSrc("img/img2.png")} alt="Mercado Municipal" width='100%' height='100%' loading='lazy' className='w-auto place-self-start max-w-[100%]' />
                            </picture>
                            <p className='absolute bottom-3 right-8 text-[.4em] font-medium text-white uppercase'>Mercado Municipal</p>
                        </div>
                    </div>

                    <div className='s-row flex  tablet:flex-row items-start  gap-2'>
                        <div className='relative flex flex-row items-start justify-start tablet:basis-[max-content]'>
                            <picture style={{width:'100%'}}>
                                <source srcSet={NextImgSrc("img/img3.avif")} type='image/avif'/>
                                <source srcSet={NextImgSrc("img/img3.webp")} type='image/webp'/>
                                <img src={NextImgSrc("img/img3.png")} alt="Shopping Vila-lobos" width='100%' height='100%' loading='lazy' className='w-auto' />
                            </picture>
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Shopping Villa-Lobos</p>
                        </div>
                        <div className='relative mobile-sm:basis-[130%] basis-[110%] tablet:basis-[60%] laptop:basis-[60%] desktop:basis-[75%] desktop-big:basis-[60%]'>
                            <picture style={{width:'100%'}}>
                                <source srcSet={NextImgSrc("img/img4.avif")} type='image/avif'/>
                                <source srcSet={NextImgSrc("img/img4.webp")} type='image/webp'/>
                                <img src={NextImgSrc("img/img4.png")} alt="Restaurante Brasserie Le Jazz" width='100%' height='100%' loading='lazy' />
                            </picture>
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Restaurante Brasserie Le Jazz</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dobra2;