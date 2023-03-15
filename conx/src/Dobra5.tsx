import { GiWashingMachine } from "react-icons/gi"
import { RiStoreLine } from "react-icons/ri"
import { FiPackage } from "react-icons/fi"
import { BsBicycle } from "react-icons/bs"
import NextImgSrc from './NextImgSrc'
import Carousel from './Carousel'

function Dobra5() {

    return (
        <div className='bg-[rgba(243,_232,_225,_.64)] w-screen'>
            <div className='m-r flex flex-col mx-auto py-[2em] gap-12'>
                <h2 className='text-[#243548] text-[1.8em] leading-[50px] laptop:text-[2.4em] text-center font-bold max-w-[800px] mx-auto mb-9'>
                    Seja para morar ou investir, diferenciais que surpreendem.
                </h2>

                <div className='flex flex-col-reverse laptop:flex-row gap-20 mx-auto justify-center'>
                    <div className='left-container relative h-auto'>
                        <Carousel navButtonBgColor="bg-[#FEFEFE]" navButtonFillColor="fill-prim" className='relative image-container hide-scroll overflow-x-scroll scroll-smooth snap-x snap-mandatory snap-always w-[700px] max-w-[326px] tablet:max-w-[680px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px]'>
                            <div className='relative snap-start shrink-0 w-[700px] max-w-[326px] tablet:max-w-[680px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px]'>
                                <picture>
                                    <source srcSet={NextImgSrc("img/lavanderia.avif")} type='image/avif' />
                                    <source srcSet={NextImgSrc("img/lavanderia.webp")} type='image/webp' />
                                    <img className=' aspect-[1.47] w-full' src={NextImgSrc("img/lavanderia.jpg")} alt="Lavanderia" loading='lazy' />
                                </picture>
                                <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada da Lavanderia</p>
                            </div>
                            <div className='relative snap-start shrink-0 w-[700px] max-w-[326px] tablet:max-w-[680px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px]'>
                                <picture>
                                    <source srcSet={NextImgSrc("img/market.avif")} type='image/avif' />
                                    <source srcSet={NextImgSrc("img/market.webp")} type='image/webp' />
                                    <img className=' aspect-[1.47] w-full' src={NextImgSrc("img/market.jpg")} alt="Mini Market" loading='lazy' />
                                </picture>
                                <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada do Mini Market</p>
                            </div>
                            <div className='relative snap-start shrink-0 w-[700px] max-w-[326px] tablet:max-w-[680px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px]'>
                                <picture>
                                    <source srcSet={NextImgSrc("img/delivery.avif")} type='image/avif' />
                                    <source srcSet={NextImgSrc("img/delivery.webp")} type='image/webp' />
                                    <img className=' aspect-[1.47] w-full' src={NextImgSrc("img/delivery.jpg")} alt="Espaço Delivery" loading='lazy' />
                                </picture>
                                <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada do Espaço Delivery</p>
                            </div>
                            <div className='relative snap-start shrink-0 w-[700px] max-w-[326px] tablet:max-w-[680px] laptop:max-w-[300px] desktop:max-w-[500px] desktop-big:max-w-[700px]'>
                                <picture>
                                    <source srcSet={NextImgSrc("img/bike.avif")} type='image/avif' />
                                    <source srcSet={NextImgSrc("img/bike.webp")} type='image/webp' />
                                    <img className=' aspect-[1.47] w-full' src={NextImgSrc("img/bike.jpg")} alt="Bike Elétrica Compartilhada" loading='lazy' />
                                </picture>
                                <p className='absolute right-4 bottom-4 uppercase text-[.4em] text-white'> perspectiva ilustrada de Bike Elétrica Compartilhada</p>
                            </div>
                        </Carousel>

                        <img src={NextImgSrc("img/well-services.png")} alt="Well Services" loading='lazy' className='max-w-[300px] mt-6 mx-auto' />
                    </div>

                    <div className="basis-[55%] flex flex-col gap-6">
                        <div className="flex flex-row justify-start items-center gap-6 border-e">
                            <div className='p-4 tablet:p-6 rounded-full bg-prim'>
                                <GiWashingMachine className='w-8 h-8 fill-sub'/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-left font-semibold leading-[30px]'>Lavanderia compartilhada</h3>
                                <p className=' text-[#6D7280] text-left leading-[25px]'>Completa e equipada com tecnologia de ponta para facilitar ainda mais a sua rotina.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-6 border-e">
                            <div className='p-4 tablet:p-6 rounded-full bg-prim'>
                                <RiStoreLine className='w-8 h-8 fill-sub' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-left font-semibold leading-[30px]'>Mini market</h3>
                                <p className=' text-[#6D7280] text-left leading-[25px]'>Produtos que não podem faltar, disponíveis para você 24 horas por dia, 7 dias por semana.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-6 border-e">
                            <div className='p-4 tablet:p-6 rounded-full bg-prim'>
                                <FiPackage className='w-8 h-8  stroke-sub' />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <h3 className=' text-[#111827] text-left font-semibold leading-[30px]'>Espaço delivery</h3>
                                <p className=' text-[#6D7280] text-left leading-[25px]'>Mais facilidade e segurança para receber suas encomendas.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-start items-center gap-4">
                            <div className='p-4 tablet:p-6 rounded-full bg-prim'>
                                <BsBicycle className='w-8 h-8 fill-sub' />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-[#111827] text-left font-semibold leading-[30px]'>Bike elétrica compartilhada</h3>
                                <p className=' text-[#6D7280] text-left leading-[25px]'>Praticidade que favorece sua saúde, otimiza sua locomoção e a preservação do meio ambiente.</p>
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