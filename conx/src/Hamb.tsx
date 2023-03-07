import React from 'react';

import { FiMenu } from 'react-icons/fi'


const Hamb = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void; }) => {

    return (
        <button className='flex cursor-pointer  bg-transparent outline-none border-none z-20  gap-1 laptop:hidden' onClick={() => {
            setOpen(!open);
        }}>
            <FiMenu className='w-[2em] h-[2em] tablet:w-[4em] tablet:h-[4em] icon_button' />
        </button>
    )
}

export default Hamb;


