import React from 'react'
import img from './img/bg-3.jpg'

function Dobra3(){

    return(
        <>
            {/* <div className=' min-h-[30vh] laptop:min-h-[90vh] w-screen bg-bg-3  bg-[length:auto_100%]  laptop:bg-[length:100%_100%]'>

            </div> */}

            <img src={img} alt="" className='h-auto w-auto max-w-[85%] tablet:max-w-[100vw] mx-auto'/>
        </>
    )
}

export default Dobra3;