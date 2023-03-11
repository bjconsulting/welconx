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
    //const rect = useRef<HTMLDivElement>(null)
    const zoom = useRef<HTMLDivElement>(null)
    //let ratio = 2

    /*
    function throttle(cb:any, delay:number) {
        let wait = false;

        return (...args : any[]) => {
            if (wait) {
                return;
            }

            cb(...args);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, delay);
        }
    }
    */

    const handleClose = () => {
        if (!pop.current || !zoom.current)
            return
        pop.current.style.display = "none"
        zoom.current.style.display = "none"
        //pop.current.removeEventListener('mousemove', handleMouseMove)
        //close.current?.removeEventListener('click', handleClose)
    }

    useEffect(() => {

        img.current.forEach(image => {

            const img = image as HTMLImageElement

            if (!img) return;

            /*
            let hasAnyPending = false;
            let x = 0;
            let y = 0;
            let xx=0;
            let yy=0;
            */

            img.onclick = () => {
                if (!pop.current || !zoom.current) return;

                const popImg = document.querySelector('.popup-image img') as HTMLImageElement;

                /*
                const handleMouseMove = (event: { clientX: any; clientY: any, movementX:number }) => {
                    if (!popImg || !rect.current || !zoom.current) return;
                    zoom.current.style.display = "block";
                    zoom.current.style.backgroundSize = popImg.width * ratio + 'px ' + popImg.height * ratio + 'px'
                    zoom.current.style.height = rect.current.offsetHeight * ratio + 'px'
                    zoom.current.style.width = rect.current.offsetWidth * ratio + 'px' 
                    zoom.current.style.backgroundImage = "url(" + popImg.src + ")"
                    zoom.current.style.backgroundRepeat = "no repeat"

                    const {top, bottom, left, right} = popImg.getClientRects()[0]

                    if (
                        event.clientX - (rect.current.offsetWidth / 2) < left
                        || event.clientX + (rect.current.offsetWidth / 2) > right
                        || event.clientY - (rect.current.offsetHeight / 2) < top
                        || event.clientY + (rect.current.offsetHeight / 2) > bottom
                    )
                        return

                    x = event.clientX
                    y = event.clientY
                    xx = x  - rect.current.offsetWidth 
                    yy = y - rect.current.offsetHeight

                    if (hasAnyPending) return
                    hasAnyPending = true
                    xx = xx *ratio
                    yy = yy *ratio

                    window.requestAnimationFrame((timestamp) => {
                        hasAnyPending = false
                        if (!rect?.current || !zoom?.current) return

                        rect.current.style.left = x + 'px'
                        rect.current.style.top = y + 'px'
                        zoom.current.style.backgroundPosition = "-" + xx  + 'px ' + "-" + yy + 'px'
                    })
                };
                */
 
                pop.current.style.display = "block";


                //pop.current.addEventListener('mousemove', throttle(handleMouseMove, 100));

                popImg.src = img.getAttribute('src') as string;
                popImg.alt = img.getAttribute('alt') as string;
            }
        })
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

            <div className='image-container flex flex-col laptop:flex-row tablet:flex-wrap items-center justify-center mx-auto  laptop:max-w-[80%] py-16 gap-8'>

                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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
   
                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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
   
                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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


                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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

                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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
                
                
                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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
                
                
                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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
                
                
                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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
                
                
                <div className='flex flex-col justify-center items-center gap-2 tablet:basis-[30%]'>
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

            <div ref={pop} className="popup-image hidden fixed top-0 left-0 bg-[rgba(0,_0,_0,_.9)] h-full w-full z-40">
                <img src={img1} alt="Galeria"  className='absolute top-1/2 left-1/2 laptop:translate-x-[-50%] -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg max-w-[300px] laptop:max-w-[50%]' />
                {/* <div ref={rect} className="rect w-[250px] h-[150px] bg-slate-400 opacity-60 absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"></div> */}
                <span ref={close} className='absolute right-12 top-3 w-8 h-4 text-[3em]  rounded-full text-white cursor-pointer' onClick={handleClose}>&times;</span>
            </div>
            <div ref={zoom} className="zoom z-50 rounded-lg hidden translate-x-[120%] fixed top-1/2"></div>
        </div>
    )
}

export default Dobra4