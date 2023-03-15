import NextImgSrc from './NextImgSrc';
import { useState } from "react";
import Hamb from "./Hamb";
import Menu from "./Menu";
import Menu2 from "./Menu2";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="head min-h-[100px] z-50  bg-transparent w-[100vw] desktop:w-[100vw] py-8 desktop:flex justify-between items-center desktop:h-[130px]">
                <div className="relative max-w-[85%] mx-auto flex justify-end laptop:max-w-[95%] laptop:min-w-[85%]">
                    <picture className="pointer-events-none flex justify-center items-center absolute top-[25%] left-0 z-20">
                        <source srcSet={NextImgSrc("img/logo_welconx.avif")} type='image/avif' width='150px' height='auto' />
                        <source srcSet={NextImgSrc("img/logo_welconx.webp")} type='image/webp' width='150px' height='auto' />
                        <source media="(min-width:640px)" srcSet={NextImgSrc("img/logo_welconx.avif")} type='image/avif' width='145px' height='auto' />
                        <source media="(min-width:640px)" srcSet={NextImgSrc("img/logo_welconx.webp")} type='image/webp' width='145px' height='auto' />
                        <source media="(min-width:640px)" srcSet={NextImgSrc("img/logo_welconx.png")} type='image/png' width='145px' height='auto' />
                        <img src={NextImgSrc("img/logo_welconx.png")} alt="Welconx Pinheiros" width='150px' loading='eager' />
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