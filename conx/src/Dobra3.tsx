import React from 'react'
import NextImgSrc from './NextImgSrc';

function Dobra3(){

    return(
        <>
            {/* <div className=' min-h-[30vh] laptop:min-h-[90vh] w-screen bg-bg-3  bg-[length:auto_100%]  laptop:bg-[length:100%_100%]'>

            </div> */}

            <img src={NextImgSrc("img/bg-3.jpg")} alt="" className='h-auto w-auto max-w-[100%] tablet:max-w-[100vw] mx-auto 4k:w-[100svw]' id='lazer' />
        </>
    )
}

export default Dobra3;