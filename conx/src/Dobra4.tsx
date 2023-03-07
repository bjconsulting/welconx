import React, { useRef, useEffect }from 'react'
import img1 from './img/gal_1.jpg'
import img2 from './img/gal_2.jpg'
import img3 from './img/gal_3.jpg'
import img4 from './img/gal_4.jpg'
import img5 from './img/gal_5.jpg'
import img6 from './img/gal_6.jpg'
import img7 from './img/gal_7.jpg'
import img8 from './img/gal_8.jpg'
import img9 from './img/gal_9.jpg'



function Dobra4() {
    const img = useRef<Array<HTMLImageElement | null>>([])
    const pop = useRef<HTMLDivElement>(null)
    const close = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        img.current.forEach(image => {

            const img = image as HTMLImageElement

            if (!img) return;
            img.onclick = () => {
                if (!pop.current) return;
                const popImg = document.querySelector('.popup-image img') as HTMLImageElement;
                pop.current.style.display = "block";
                popImg.src = img.getAttribute('src') as string;
            }
        })

        if (!close.current) return;
        close.current.onclick = () => {
            if (!pop.current) return;
            pop.current.style.display = "none";
        }
    });

   
    
    return(
        <div className='relative min-w-screen bg-[#F9FAFB] flex flex-col justify-center items-center'>
            <div className='py-20 max-w-[60%] text-center mx-auto'>
                <h2 className='font-bold mb-8 text-[#37414D] text-[1.8em] laptop:text-[2.6em]'>
                    A experiência de morar muito além dos metros quadrados.
                </h2>
                <p className='text-[#37414D] text-[1.2em]'>
                    Espaços completos para você relaxar, se reunir com a família, amigos e viver o melhor da vida com muito mais qualidade e praticidade.
                </p>
            </div>

            <div className='image-container flex flex-col laptop:flex-row laptop:flex-wrap items-center justify-center mx-auto  max-w-[80%] py-16 gap-8'>

                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img1} alt="PERSPECTIVA ILUSTRADA DO HALL SOCIAL" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO HALL SOCIAL
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Hall social
                        </p>
                </div>
   
                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img2} alt="PERSPECTIVA ILUSTRADA DO ESPAÇO GOURMETl" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO ESPAÇO GOURMET
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Espaço gourmet
                        </p>
                </div>
   
                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img3} alt="PERSPECTIVA ILUSTRADA DO SALÃO DE FESTAS" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO SALÃO DE FESTAS
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Salão de festas
                        </p>
                </div>


                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img4} alt="PERSPECTIVA ILUSTRADA DO FITNESS" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO FITNESS
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Fitness
                        </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img5} alt="PERSPECTIVA ILUSTRADA DA CHURRASQUEIRA" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DA CHURRASQUEIRA
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Churrasqueira
                        </p>
                </div>
                
                
                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img6} alt="PERSPECTIVA ILUSTRADA DO COWORKING" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO COWORKING
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Coworking
                        </p>
                </div>
                
                
                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img7} alt="PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Piscina com deck molhado
                        </p>
                </div>
                
                
                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img8} alt="PERSPECTIVA ILUSTRADA DA COBERTURA" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DA COBERTURA
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Cobertura
                        </p>
                </div>
                
                
                <div className='flex flex-col justify-center items-center gap-2 basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <img ref={(element) => img.current.push(element)} src={img9} alt="PERSPECTIVA ILUSTRADA DO PET PLACE" width='380px' className='aspect-[19/12] cursor-pointer object-cover'/>

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO PET PLACE
                        </p>
                    </div>
                        <p className='font-semibold text-[1.2em] text-center'>
                            Pet place
                        </p>
                </div>


 

            </div>

            <div ref={pop} className="popup-image hidden fixed top-0 left-0 bg-[rgba(0,_0,_0,_.9)] h-full w-full z-50">
                <img src={img1} alt="" width='50%'  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg' />
                <span ref={close} className='absolute right-12 top-3 w-8 h-4 text-[3em]  rounded-full text-white cursor-pointer'>&times;</span>
            </div>
        </div>
    )
}

export default Dobra4