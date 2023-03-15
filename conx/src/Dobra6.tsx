import NextImgSrc from './NextImgSrc';
// import studio from '../public/img/studio.jpg'
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";

function Dobra6(){
    return(
        <div className="flex flex-col gap-24 py-10 justify-center items-center laptop:pb-56" id='planta'>
            <h2 className=" font-bold text-[1.7em] laptop:text-[2.4em] text-[#111827] text-center laptop:max-w-[55%]">
                Plantas desenhadas para proporcionar a melhor perspectiva de viver.
            </h2>

            <div className='flex flex-col gap-8 tablet:gap-0 tablet:flex-row'>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="uppercase font-bold text-sub text-2xl text-center">
                        STUDIO | 31 m²
                    </h3>

                    <div className="flex flex-col justify-center items-center relative">
                        <img src={NextImgSrc("img/planta1.jpg")} alt="Studio 31m²" className='max-w-[300px] laptop:max-w-[700px]' />

                        {/* <div className='p-2 tablet:p-4 rounded-full bg-sub opacity-80 absolute top-[30%] laptop:top-[45%] right-4 tablet:right-8 hover:opacity-100 cursor-pointer'>
                            <GrNext className='fill-[#D0A388]' />
                        </div>

                        <div className='p-2 tablet:p-4 rounded-full bg-sub opacity-80 absolute top-[30%] laptop:top-[45%] left-4 tablet:left-8 hover:opacity-100 cursor-pointer'>
                            <GrPrevious className='fill-[#D0A388]' />
                        </div> */}
                    </div>

                    <p className='uppercase text-[#6D7280] text-xs text-center font-normal'>
                        planta ilustrada do studio de 31 m²
                    </p>

                </div>

                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="uppercase font-bold text-sub text-2xl text-center">
                        APARTAMENTO | 31 m²
                    </h3>

                    <div className="flex flex-col justify-center items-center relative">
                        <img src={NextImgSrc("img/planta2.jpg")} alt="Studio 31m²" className='max-w-[300px] laptop:max-w-[700px]' />

                        {/* <div className='p-2 tablet:p-4 rounded-full bg-sub opacity-80 absolute top-[30%] laptop:top-[45%] right-4 tablet:right-8 hover:opacity-100 cursor-pointer'>
                            <GrNext className='fill-[#D0A388]' />
                        </div>

                        <div className='p-2 tablet:p-4 rounded-full bg-sub opacity-80 absolute top-[30%] laptop:top-[45%] left-4 tablet:left-8 hover:opacity-100 cursor-pointer'>
                            <GrPrevious className='fill-[#D0A388]' />
                        </div> */}
                    </div>

                    <p className='uppercase text-[#6D7280] text-xs text-center font-normal'>
                        planta ilustrada do apartamento de 31 m²
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Dobra6;