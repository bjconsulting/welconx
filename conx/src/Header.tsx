import { useState } from "react";
import Hamb from "./Hamb";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import logo from './img/logo_welconx.png'

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="head  min-h-[100px] z-50  bg-transparent w-[100vw] desktop:w-[100vw] py-8 desktop:flex justify-between items-center desktop:h-[130px]">
                <div className="relative max-w-[85%] mx-auto flex justify-end laptop:min-w-[85%]">
                    <picture className="pointer-events-none flex justify-center items-center absolute top-[25%] left-0">
                        <source media="(min-width:640px)" srcSet={logo} width='145px' height='auto' />
                        <img src={logo} alt="Welconx Pinheiros" width='150px' />
                    </picture>


                    <Hamb open={open} setOpen={setOpen} />
                    <Menu open={open} />
                    <Menu2 />

                </div>
            </header>
        </>
    )
}
export default Header;