import { useRef } from 'react'
import { GrNext } from "react-icons/gr";
import NextImgSrc from './NextImgSrc'
import { GrPrevious } from "react-icons/gr";


function Dobra4() {
    const pop = useRef<HTMLDivElement>(null)
    const close = useRef<HTMLSpanElement>(null)
    /*
    const rect = useRef<HTMLDivElement>(null)
    const zoom = useRef<HTMLDivElement>(null)
    */
    const popImgRef = useRef<HTMLImageElement>(null)
    /*
    const zoomImgRef = useRef<HTMLImageElement>(null)
    const ratio = 2
    */
    let wbkp = ''
    let hbkp = ''
    let obkp = ''
    /*
    type RequestAnimationFrame = (callback: FrameRequestCallback) => number
    function throttle(timer:RequestAnimationFrame) {
        let queuedCallback:FrameRequestCallback|null
        return (callback:FrameRequestCallback) => {
            if (!queuedCallback) {
            timer((timespan) => {
                const cb = queuedCallback
                queuedCallback = null
                cb!(timespan)
            })
            }
            queuedCallback = callback
        }
    }
    */
    const activateBackScroll = () => {
        const body = document.querySelector('body');
        body!.style.width = wbkp;
        body!.style.height = hbkp;
        body!.style.overflow = obkp;
    }
    const handleClose = () => {
        pop.current!.style.display = "none"
        //rect.current!.style.visibility = "hidden"

        activateBackScroll()
    }
    /*
    const handleMouseMove = (event: PointerEvent) => {
        event.preventDefault()
        const popImg = popImgRef.current
        if (!popImg || !rect.current || !zoom.current) return

        const { width: rectWidth, height: rectHeight } = rect.current.getBoundingClientRect()
        const { top, bottom, left, right, width: piWidth, height: piHeight } = popImg.getBoundingClientRect()
        
        if (
            event.clientX < left
            || event.clientX > right
            || event.clientY < top
            || event.clientY > bottom
            )
            return

        rect.current.style.visibility = 'visible'

        if (zoom.current.style.backgroundImage !== `url(${popImg.src})`) {
            const zoomStyle = {
                "visibility": "visible",
                //'backgroundSize': `${piWidth * ratio}px ${piHeight * ratio}px`,
                'width': `${rectWidth * ratio}px`,
                'height': `${rectHeight * ratio}px`,
                // 'backgroundImage': `url(${popImg.src})`,
                // 'backgroundRepeat': 'no-repeat'
            }
            Object.assign(zoom.current.style, zoomStyle)

            const zoomImgStyle = {
                'width': `${piWidth * ratio}px`,
                'height': `${piHeight * ratio}px`,
            }
            Object.assign(zoomImgRef.current!.style, zoomImgStyle)
        }

        const mouseX = event.clientX
        const mouseY = event.clientY

        const updatePosition = (): void => {
            if (!rect.current || !zoom.current)
                return
                
            const {top: popTop, left: popLeft, width: popWidth, height: popHeight} = popImg.getBoundingClientRect()

            const newRectLeft = mouseX < popLeft + (popWidth / 2)
                                ? Math.max(popLeft + (rectWidth / 2), mouseX)
                                : Math.min(popLeft + popWidth - (rectWidth / 2), mouseX)

            const newRectTop = mouseY < popTop + (popWidth / 2)
                                ? Math.max(popTop + (rectHeight / 2), mouseY)
                                : Math.min(popTop + popHeight - (rectHeight / 2), mouseY)
            
            rect.current.style.left = `${newRectLeft}px`
            rect.current.style.top = `${newRectTop}px`

            const {top: rectTop, left: rectLeft} = rect.current.getBoundingClientRect()

            const bgX = (popLeft - rectLeft) * ratio
            const bgY = (popTop - rectTop) * ratio

            //zoom.current.style.backgroundPosition = `${bgX}px ${bgY}px`
            zoomImgRef.current!.style.top = `${bgY}px`;
            zoomImgRef.current!.style.left = `${bgX}px`;
        }

        const handler = throttle(requestAnimationFrame);
        handler(updatePosition)
    }
    */
    const thumbClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const body = document.querySelector('body')
        wbkp = body!.style.width
        hbkp = body!.style.height
        obkp = body!.style.overflow

        body!.style.width = '100vw'
        body!.style.height = '100vh'
        body!.style.overflow = 'hidden'

        const popImg = popImgRef.current! as HTMLElement

        pop.current!.style.display = "block"

        const img = event.target as HTMLImageElement
        const pict = img.parentElement as HTMLPictureElement
        
        //console.log(pict.childNodes)
        
        const popPict = popImg.parentElement!
        const popNodes = Array.from(popPict.childNodes)

        //const zoomNodes = Array.from(zoomImgRef.current!.parentElement!.childNodes)
        
        //console.log({popNodes, zoomNodes})

        pict.childNodes.forEach((node, index) => {
            const typed = node as HTMLElement
            const popTyped = popNodes[index] as HTMLElement
            
            // popTyped.setAttribute('src', typed.dataset['srcm']!)
            popTyped.setAttribute('src', typed.dataset['src']!)
            popTyped.setAttribute('alt', typed.getAttribute('alt') ?? '')
            
            /*
            const zoomTyped = zoomNodes[index] as HTMLElement
            zoomTyped.setAttribute('src', typed.dataset['src']!)
            zoomTyped.setAttribute('alt', typed.getAttribute('alt') ?? '')
            */
        })

        popPict.dataset['index'] = pict.dataset['index']

        /*
        {
            const { width: rectWidth, height: rectHeight } = rect.current!.getBoundingClientRect()

            //console.log({rectWidth, rectHeight})

            const zoomStyle = {
                'height': `${rectHeight * ratio}px`,
                'width': `${rectWidth * ratio}px`
            }
            Object.assign(zoom.current!.style, zoomStyle)
        }
        */
    }

    const prev = () => {
        const pict = document.querySelector('.popup-image picture') as HTMLPictureElement
        const imgs = document.querySelectorAll('.image picture img') as NodeListOf<HTMLImageElement>
        const index = parseInt(pict.dataset['index']!)

        const prevIndex = index - 1 === -1
                            ? imgs.length - 1
                            : index - 1

        activateBackScroll()

        const img = imgs[prevIndex] as HTMLImageElement
        img.click()
    }

    const next = () => {
        const pict = document.querySelector('.popup-image picture') as HTMLPictureElement
        const imgs = document.querySelectorAll('.image picture img') as NodeListOf<HTMLImageElement>
        const index = parseInt(pict.dataset['index']!)
        
        const nextIndex = index + 1 === imgs.length
                            ? 0
                            : index + 1

        activateBackScroll()

        const img = document.querySelectorAll('.image picture img')[nextIndex] as HTMLImageElement
        img.click()
    }

    let pos = 0
    const touchStart = (e: React.TouchEvent<HTMLElement>) => {
        console.log('Drag start', e.changedTouches)
        e.preventDefault()
        const posStart = e.changedTouches[0].screenX
        pos = posStart
    }

    const touchEnd = (e: React.TouchEvent<HTMLElement>) => {
        console.log('Drag end', e.changedTouches)
        e.preventDefault()
        const posEnd = e.changedTouches[0].screenX

        const delta = posEnd - pos

        if (delta === 0) return

        if (delta > 0) prev()

        if (delta < 0) next()
    }

    return (
        <div className='relative min-w-screen bg-[#F9FAFB] flex flex-col justify-center items-center' id='lazer'>
            <div className='py-20  text-center mx-auto'>
                <h2 className='font-bold mb-8 text-[#37414D] text-[1.8em] laptop:text-[2.6em] leading-[50px] max-w-[80%] laptop:max-w-[60%] mx-auto'>
                    A experiência de morar muito além dos metros quadrados.
                </h2>
                <p className='text-[#37414D] laptop:text-lg leading-6 px-4 laptop:px-0 laptop:leading-[37px]'>
                    Espaços completos para você relaxar, se reunir com a família, amigos e viver o melhor da vida com muito mais qualidade e praticidade.
                </p>
            </div>

            <div className='image-container flex flex-col laptop:flex-row tablet:flex-wrap items-center justify-center mx-auto laptop:max-w-[80%] py-16 gap-12 px-2'>

                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="0">
                            <source srcSet={NextImgSrc("img/gal_1.avif")} data-src={NextImgSrc("img/gal_1.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_1.webp")} data-src={NextImgSrc("img/gal_1.webp")} type='image/webp'/>
                            {/* <img src={galt_1_j} data-srcm={galm_1_j} data-src={gal_1_j} alt="PERSPECTIVA ILUSTRADA DO HALL SOCIAL" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick}/> */}
                            <img src={NextImgSrc("img/gal_1.jpg")} data-src={NextImgSrc("img/gal_1.jpg")} alt="PERSPECTIVA ILUSTRADA DO HALL SOCIAL" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick}/>
                        </picture>
                        {/* <img src={gal_1} alt="PERSPECTIVA ILUSTRADA DO HALL SOCIAL" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO HALL SOCIAL
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Hall social
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="1">
                            <source srcSet={NextImgSrc("img/gal_2.avif")} data-src={NextImgSrc("img/gal_2.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_2.webp")} data-src={NextImgSrc("img/gal_2.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_2_a} data-srcm={galm_1_a} data-src={gal_2_a} type='image/avif'/>
                            <source srcSet={galt_2_w} data-srcm={galm_1_w} data-src={gal_2_w} type='image/webp'/>
                            <img src={galt_2_j} data-srcm={galm_2_j} data-src={NextImgSrc("img/gal_2.jpg")} alt="PERSPECTIVA ILUSTRADA DO SALÃO DE FESTAS" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_2.jpg")} data-srcm={NextImgSrc("img/gal_2.jpg")} data-src={NextImgSrc("img/gal_2.jpg")} alt="PERSPECTIVA ILUSTRADA DO SALÃO DE FESTAS" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_2} alt="PERSPECTIVA ILUSTRADA DO SALÃO DE FESTAS" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO SALÃO DE FESTAS
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Salão de festas
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="2">
                            <source srcSet={NextImgSrc("img/gal_3.avif")} data-src={NextImgSrc("img/gal_3.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_3.webp")} data-src={NextImgSrc("img/gal_3.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_3_a} data-srcm={galm_3_a} data-src={gal_3_a} type='image/avif'/>
                            <source srcSet={galt_3_w} data-srcm={galm_3_w} data-src={gal_3_w} type='image/webp'/>
                            <img src={galt_3_j} data-srcm={galm_3_j} data-src={NextImgSrc("img/gal_3.jpg")} alt="PERSPECTIVA ILUSTRADA DO ESPAÇO GOURMET" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_3.jpg")} data-srcm={NextImgSrc("img/gal_3.jpg")} data-src={NextImgSrc("img/gal_3.jpg")} alt="PERSPECTIVA ILUSTRADA DO ESPAÇO GOURMET" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_3} alt="PERSPECTIVA ILUSTRADA DO ESPAÇO GOURMET" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO ESPAÇO GOURMET
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Espaço gourmet
                    </p>
                </div>


                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="3">
                            <source srcSet={NextImgSrc("img/gal_4.avif")} data-src={NextImgSrc("img/gal_4.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_4.webp")} data-src={NextImgSrc("img/gal_4.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_4_a} data-srcm={galm_4_a} data-src={gal_4_a} type='image/avif'/>
                            <source srcSet={galt_4_w} data-srcm={galm_4_w} data-src={gal_4_w} type='image/webp'/>
                            <img src={galt_4_j} data-srcm={galm_4_j} data-src={NextImgSrc("img/gal_4.jpg")} alt="PERSPECTIVA ILUSTRADA DO ESPAÇO GOURMETl" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_4.jpg")} data-srcm={NextImgSrc("img/gal_4.jpg")} data-src={NextImgSrc("img/gal_4.jpg")} alt="PERSPECTIVA ILUSTRADA DO FITNESS" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_4} alt="PERSPECTIVA ILUSTRADA DO FITNESS" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO FITNESS
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Fitness
                    </p>
                </div>

                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="4">
                            <source srcSet={NextImgSrc("img/gal_5.avif")} data-src={NextImgSrc("img/gal_5.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_5.webp")} data-src={NextImgSrc("img/gal_5.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_5_a} data-srcm={galm_5_a} data-src={gal_5_a} type='image/avif'/>
                            <source srcSet={galt_5_w} data-srcm={galm_5_w} data-src={gal_5_w} type='image/webp'/>
                            <img src={galt_5_j} data-srcm={galm_5_j} data-src={NextImgSrc("img/gal_5.jpg")} alt="PERSPECTIVA ILUSTRADA DA CHURRASQUEIRA" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_5.jpg")} data-srcm={NextImgSrc("img/gal_5.jpg")} data-src={NextImgSrc("img/gal_5.jpg")} alt="PERSPECTIVA ILUSTRADA DA CHURRASQUEIRA" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_5} alt="PERSPECTIVA ILUSTRADA DA CHURRASQUEIRA" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DA CHURRASQUEIRA
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Churrasqueira
                    </p>
                </div>


                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="5">
                            <source srcSet={NextImgSrc("img/gal_6.avif")} data-src={NextImgSrc("img/gal_6.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_6.webp")} data-src={NextImgSrc("img/gal_6.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_6_a} data-srcm={galm_6_a} data-src={gal_6_a} type='image/avif'/>
                            <source srcSet={galt_6_w} data-srcm={galm_6_w} data-src={gal_6_w} type='image/webp'/>
                            <img src={galt_6_j} data-srcm={galm_6_j} data-src={NextImgSrc("img/gal_6.jpg")} alt="PERSPECTIVA ILUSTRADA DO COWORKING" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_6.jpg")} data-srcm={NextImgSrc("img/gal_6.jpg")} data-src={NextImgSrc("img/gal_6.jpg")} alt="PERSPECTIVA ILUSTRADA DO COWORKING" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_6} alt="PERSPECTIVA ILUSTRADA DO COWORKING" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO COWORKING
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Coworking
                    </p>
                </div>


                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="6">
                            <source srcSet={NextImgSrc("img/gal_7.avif")} data-src={NextImgSrc("img/gal_7.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_7.webp")} data-src={NextImgSrc("img/gal_7.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_7_a} data-srcm={galm_7_a} data-src={gal_7_a} type='image/avif'/>
                            <source srcSet={galt_7_w} data-srcm={galm_7_w} data-src={gal_7_w} type='image/webp'/>
                            <img src={galt_7_j} data-srcm={galm_7_j} data-src={NextImgSrc("img/gal_7.jpg")} alt="PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_7.jpg")} data-srcm={NextImgSrc("img/gal_7.jpg")} data-src={NextImgSrc("img/gal_7.jpg")} alt="PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_7} alt="PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Piscina com deck molhado
                    </p>
                </div>


                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="7">
                            <source srcSet={NextImgSrc("img/gal_8.avif")} data-src={NextImgSrc("img/gal_8.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_8.webp")} data-src={NextImgSrc("img/gal_8.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_8_a} data-srcm={galm_8_a} data-src={gal_8_a} type='image/avif'/>
                            <source srcSet={galt_8_w} data-srcm={galm_8_w} data-src={gal_8_w} type='image/webp'/>
                            <img src={galt_8_j} data-srcm={galm_8_j} data-src={NextImgSrc("img/gal_8.jpg")} alt="PERSPECTIVA ILUSTRADA DA COBERTURA" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_8.jpg")} data-srcm={NextImgSrc("img/gal_8.jpg")} data-src={NextImgSrc("img/gal_8.jpg")} alt="PERSPECTIVA ILUSTRADA DO ROOFTOP" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_8} alt="PERSPECTIVA ILUSTRADA DA COBERTURA" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO ROOFTOP
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Rooftop
                    </p>
                </div>


                <div className='flex flex-col justify-center items-center gap-8 laptop:gap-6 tablet:basis-[30%]'>
                    <div className='image relative overflow-hidden'>
                        <picture data-index="8">
                            <source srcSet={NextImgSrc("img/gal_9.avif")} data-src={NextImgSrc("img/gal_9.avif")} type='image/avif'/>
                            <source srcSet={NextImgSrc("img/gal_9.webp")} data-src={NextImgSrc("img/gal_9.webp")} type='image/webp'/>
                            {/* <source srcSet={galt_9_a} data-srcm={galm_9_a} data-src={gal_9_a} type='image/avif'/>
                            <source srcSet={galt_9_w} data-srcm={galm_9_w} data-src={gal_9_w} type='image/webp'/>
                            <img src={galt_9_j} data-srcm={galm_9_j} data-src={NextImgSrc("img/gal_9.jpg")} alt="PERSPECTIVA ILUSTRADA DO PET PLACE" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}
                            <img src={NextImgSrc("img/gal_9.jpg")} data-srcm={NextImgSrc("img/gal_9.jpg")} data-src={NextImgSrc("img/gal_9.jpg")} alt="PERSPECTIVA ILUSTRADA DO PET PLACE" width='380px' loading='lazy' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} />
                        </picture>
                        {/* <img src={gal_9} alt="PERSPECTIVA ILUSTRADA DO PET PLACE" width='380px' className='aspect-[19/12] cursor-pointer object-cover' onClick={thumbClick} /> */}

                        <p className='uppercase absolute right-3 bottom-3 text-[.3em] font-semibold text-white'>
                            PERSPECTIVA ILUSTRADA DO PET PLACE
                        </p>
                    </div>
                    <p className='font-semibold text-[1.2em] text-center'>
                        Pet place
                    </p>
                </div>

            </div>

            {/* <div ref={pop} className="popup-image hidden fixed overflow-hidden top-0 left-0 bg-[rgba(0,_0,_0,_.9)] h-full w-full z-40" onPointerMove={handleMouseMove}> */}
            <div ref={pop} className="popup-image hidden fixed overflow-hidden top-0 left-0 bg-[rgba(0,_0,_0,_.9)] h-full w-full z-40">
                {/* <div className='flex flex-col gap-5 w-full absolute mt-20 tablet:w-auto tablet:flex-row tablet:justify-center tablet:top-1/2 tablet:left-1/2 tablet:-translate-x-1/2 tablet:-translate-y-1/2'> */}
                <div className='w-full mx-auto absolute tablet:flex-row tablet:justify-center tablet:top-1/2 tablet:left-1/2 tablet:-translate-x-1/2 tablet:-translate-y-1/2'>
                    <picture onTouchStart={touchStart} onTouchEnd={touchEnd}>
                        <source srcSet='' type='image/avif'/>
                        <source srcSet='' type='image/webp'/>
                        {/* <img ref={popImgRef} src='' alt='' className='object-cover rounded-lg w-full'/> */}
                        <img ref={popImgRef} src='' alt='' className='object-cover rounded-lg max-w-[80%] max-h-[80%] mx-auto mt-40 tablet:mt-0' loading='lazy'/>
                    </picture>
                    {/* <img ref={popImgRef} alt="Galeria" className='absolute top-1/2 left-1/2 laptop:translate-x-[-80%] -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg max-w-[300px] laptop:max-w-[50%]' /> */}
                    {/* <div ref={zoom} className="zoom z-50 invisible overflow-hidden relative object-cover rounded-lg shrink-0">
                        <picture>
                            <source srcSet='' type='image/avif'/>
                            <source srcSet='' type='image/webp'/>
                            <img ref={zoomImgRef} src='' alt='' className='absolute max-w-none'/>
                        </picture>
                    </div> */}

                </div>
                {/* <div ref={rect} className="invisible rect w-[250px] h-[150px] bg-slate-400 opacity-60 absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"></div> */}
                <span ref={close} className='absolute right-12 top-1 w-2 h-2 text-[3em] rounded-full text-white cursor-pointer select-none tablet:top-3' onClick={handleClose}>&times;</span>
                <span className='p-3 border border-solid border-white rounded-full cursor-pointer absolute top-1/2 left-10 laptop:left-3 text-2xl laptop:text-7xl select-none' onClick={prev}><GrPrevious className='fill-white'/></span>
                <span className='p-3 border border-solid border-white rounded-full cursor-pointer absolute top-1/2 right-10 laptop:right-3 text-2xl laptop:text-7xl select-none' onClick={next}><GrNext /></span>
            </div>
        </div>
    )
}

export default Dobra4