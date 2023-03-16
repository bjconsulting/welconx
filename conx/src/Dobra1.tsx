import Header from './Header';
import { HiMapPin } from 'react-icons/hi2'
import { useEffect } from 'react'
import CheckImgSupport from './CheckImgSupport'

function Dobra1() {

    useEffect(() => {
        if (!window) return

        setTimeout(() => {
            if (window.innerWidth <= 640)
                CheckImgSupport('.bg-bg-1', 'bg-1.webp', 'bg-1.avif', 'bg-1.jpg')
            else
                CheckImgSupport('.bg-bg-1', 'bgm-1.webp', 'bgm-1.avif', 'bgm-1.jpg')
        }, 0)
    })

    return(
        <div className='bg-bg-1 bg-[length:auto_100%] laptop:bg-[length:100%_100%] bg-[73%] max-w-screen desktop:min-h-[90vh]' id='home'>
            <div className='hero z-10  desktop:min-h-[90svh] relative max-w-screen'>
                <Header/>

                <div className='m-r py-32 pt-34 laptop:pt-64 flex flex-col  justify-left items-start laptop:justify-start desktop:max-w-[580px] gap-12 tablet:text-left'>
                    
                    <p className='text-[#F3F3F3]  font-medium text-[1em] uppercase '>
                        lançamento
                    </p>

                    <h1 className='font-bold text-[1.6em] laptop:text-[2.4em] text-[#FEFEFE]'>
                        O urbano que te envolve em um dos bairros mais desejados de São Paulo
                    </h1>

                    <div className='flex flex-row gap-2 justify-start items-start'>
                        <HiMapPin className="fill-[#FDE8DC]"/>
                        <p className='text-[#FDE8DC] font-bold text-base laptop:text-[1em]'>
                            More a 150 m da estação Pinheiros
                        </p>
                    </div>

                    <p className='font-bold uppercase text-white text-base laptop:text-[1em]'>
                        Aptos. e Studios de 31 m² |<br className='laptop:hidden'/> lazer completo
                    </p>

                    <a href="#form-contato" className='hero_b bg-sub text-white flex flex-row justify-center items-center gap-4 min-w-[217px] px-5 py-[10px] font-semibold rounded-md hover:bg-[#94725E]'>
                        Fale com um consultor
                    </a>



                </div>

                <p className='hidden laptop:block absolute right-4 laptop:right-9 bottom-5 uppercase font-semibold text-white text-[.6em]'>
                    PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO
                </p>

            </div>
        </div>
    )
}

export default Dobra1;