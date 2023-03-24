import React from 'react';
import { FiMenu } from 'react-icons/fi'
import { RiCloseCircleLine } from 'react-icons/ri'

const Hamb = ({ isOpen: isOpen, setOpen }: { isOpen: boolean, setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void; }) => {

    return (
        <button className='flex cursor-pointer bg-transparent outline-none border-none z-20 gap-1 laptop:hidden' aria-label='Abrir menu' onClick={() => {
            setOpen(!isOpen);
        }}>
            {
                isOpen
                ? <RiCloseCircleLine className='w-[2em] h-[2em] tablet:w-[4em] tablet:h-[4em] icon_button' />
                : <FiMenu className='w-5 h-[2em] tablet:w-[4em] tablet:h-[4em] icon_button' />
            }
        </button>
    )
}

export default Hamb;


