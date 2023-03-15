import React from 'react'
import NextImgSrc from './NextImgSrc'

function Dobra3(){
    
    return(
        <>
            {/* <div className=' min-h-[30vh] laptop:min-h-[90vh] w-screen bg-bg-3  bg-[length:auto_100%]  laptop:bg-[length:100%_100%]'>

            </div> */}
            <picture>
                <source srcSet={NextImgSrc("img/bg-3.avif")} type='image/avif'/>
                <source srcSet={NextImgSrc("img/bg-3.webp")} type='image/webp'/>
                <img src={NextImgSrc("img/bg-3.jpg")} alt="" className='h-auto w-auto max-w-[85%] tablet:max-w-[100vw] mx-auto' id='lazer' loading='lazy' />
            </picture>
        </>
    )
}

export default Dobra3;