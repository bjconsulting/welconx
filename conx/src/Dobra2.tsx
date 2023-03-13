import React from 'react'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'


function Dobra2() {
    return (
        <div className=' bg-bg-2 bg-cover'>

            <div className='flex m-r mx-auto flex-col desktop:flex-row justify-center items-center py-16 gap-12' id='local'>
                <div className='left basis-[50%] flex flex-col text-left justify-center items-start gap-12'>
                    <h2 className='text-[2em] text-prim font-bold leading-[1.4em]'>
                        Você na sua melhor versão.<br />
                        Você no lugar certo.
                    </h2>
                    <p className='text-[1em] font-normal leading-[1.6em]'>
                        Seja qual for o seu estilo, ele é parte de um novo jeito de viver.<br />
                        Um bairro como Pinheiros, que abrange a pluralidade de etnias, gostos e costumes, só poderia oferecer o melhor das grandes cidades, como alta gastronomia, mobilidade, informação, cultura e experiências.
                    </p>
                </div>

                <div className='flex flex-col basis-[50%] items-center gap-2 justify-center'>

                    <div className='f-row flex flex-col tablet:flex-row items-end gap-2'>
                        <div className='relative'>
                            <img src={img1} alt="Shopping Iguatemi" width='328px' />
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Shopping Iguatemi</p>
                        </div>
                        <div className='relative'>
                            <img src={img2} alt="Mercado Municipal" width='267px' className='w-auto laptop:max-w-[267px]' />
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Mercado Municipal</p>
                        </div>
                    </div>

                    <div className='s-row flex flex-col tablet:flex-row items-center gap-2'>
                        <div className='relative'>
                            <img src={img3} alt="Shopping Vila-lobos" width='267px' className='w-auto laptop:max-w-[267px]' />
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Shopping Villa-Lobos</p>
                        </div>
                        <div className='relative'>
                            <img src={img4} alt="Restaurante Brasserie Le Jazz" width='328px' />
                            <p className='absolute bottom-3 right-3 text-[.4em] font-medium text-white uppercase'>Restaurante Brasserie Le Jazz</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dobra2;