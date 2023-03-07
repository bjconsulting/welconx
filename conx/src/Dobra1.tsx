import React from 'react'
import Header from './Header';
import { HiMapPin } from 'react-icons/hi2'


function Dobra1() {
    return(
        <div className='bg-bg-1 bg-[length:auto_100%] laptop:bg-[length:100%_100%] min-h-[100vh] desktop:min-h-[90vh]'>
            <div className='hero z-10 min-h-[100vh] desktop:min-h-[90vh] relative'>
                <Header/>

                <div className='m-r my-32 laptop:mt-24 flex flex-col items-center justify-center laptop:items-start laptop:justify-start desktop:max-w-[580px] gap-12 tablet:text-center laptop:text-left'>
                    
                    <p className='text-[#F3F3F3] font-medium text-[1em] uppercase '>
                        breve lançamento
                    </p>

                    <h1 className='font-bold text-[2.4em] text-[#FEFEFE]'>
                        O urbano que te envolve em um dos bairros mais desejados de São Paulo 
                    </h1>

                    <div className='flex flex-row gap-2 justify-start items-start'>
                        <HiMapPin className="fill-[#FDE8DC]"/>
                        <p className='text-[#FDE8DC] font-bold'>
                            More a 150m da estação Pinheiros
                        </p>
                    </div>

                    <p className='text-[.8em] font-bold uppercase text-white'>
                        Aptos. e Studios de 31 m² | lazer completo
                    </p>

                    <button className='hero_b bg-sub text-white flex flex-row justify-center items-center gap-4 min-w-[217px] px-5 py-[10px] font-semibold rounded-md hover:bg-prim'>
                        Fale com um consultor
                    </button>



                </div>

                <p className='hidden laptop:block absolute right-4 laptop:right-9 bottom-5 uppercase font-semibold text-white text-[.6em]'>
                    PERSPECTIVA ILUSTRADA DA PISCINA COM DECK MOLHADO
                </p>

            </div>
        </div>
    )
}

export default Dobra1;