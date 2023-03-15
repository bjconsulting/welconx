import React from 'react'
import NextImgSrc from './NextImgSrc';

function Dobra2() {
    return (
        <div className=' bg-bg-2 bg-cover'>

            <div className='flex m-r mx-auto flex-col desktop:flex-row justify-center items-center py-16 gap-12' id='local'>
                <div className='left basis-[45%] flex flex-col text-left justify-center items-start gap-12 desktop:basis-[55%]'>
                    <h2 className='text-[2em]  text-prim font-bold leading-[1.4em]'>
                        Você na sua melhor versão.<br />
                        Você no lugar certo.
                    </h2>
                    <p className='text-[1em] font-normal leading-[1.6em] desktop:max-w-[90%]'>
                        Seja qual for o seu estilo, ele é parte de um novo jeito de viver.<br />
                        Um bairro como Pinheiros, que abrange a pluralidade de etnias, gostos e costumes, só poderia oferecer o melhor das grandes cidades. Alta gastronomia, mobilidade, informação, cultura e experiências.
                    </p>
                </div>

                <div className='flex flex-col basis-[45%] items-center gap-2 justify-center'>

                    <div className='f-row flex flex-col tablet:flex-row items-end gap-2'>
                        <div className='relative'>
                            <img src={NextImgSrc("img/img1.png")} alt="Shopping Iguatemi" width='auto' />
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Shopping Iguatemi</p>
                        </div>
                        <div className='relative flex flex-row justify-start'>
                            <img src={NextImgSrc("img/img2.png")} alt="Mercado Municipal" width='auto' className='w-auto laptop:max-w-[90%] place-self-start' />
                            <p className='absolute bottom-3 right-8 text-[.4em] font-medium text-white uppercase'>Mercado Municipal</p>
                        </div>
                    </div>

                    <div className='s-row flex flex-col tablet:flex-row items-start gap-2'>
                        <div className='relative flex flex-row items-start justify-end'>
                            <img src={NextImgSrc("img/img3.png")} alt="Shopping Vila-lobos" width='auto' className='w-auto laptop:max-w-[90%]' />
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Shopping Villa-Lobos</p>
                        </div>
                        <div className='relative'>
                            <img src={NextImgSrc("img/img4.png")} alt="Restaurante Brasserie Le Jazz" width='auto' />
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Restaurante Brasserie Le Jazz</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dobra2;