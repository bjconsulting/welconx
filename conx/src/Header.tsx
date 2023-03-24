import NextImgSrc from './NextImgSrc';
import { useState } from "react";
import Hamb from "./Hamb";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="head z-50 bg-transparent w-[100vw] desktop:w-[100vw] py-3 desktop:flex justify-between items-center desktop:h-[130px]">
                <div className="relative max-w-[85%] mx-auto flex justify-end laptop:max-w-[95%] laptop:min-w-[85%]">
                    <picture className="pointer-events-none absolute top-[5%] -left-[2.5%] z-20 w-[26%] aspect-[0.96] desktop:top-[18%]">
                        <source srcSet={NextImgSrc("img/logo_welconx.avif")} type='image/avif' />
                        <source srcSet={NextImgSrc("img/logo_welconx.webp")} type='image/webp' />
                        <source media="(min-width:640px)" srcSet={NextImgSrc("img/logo_welconx.avif")} type='image/avif' width='145px' height='auto' />
                        <source media="(min-width:640px)" srcSet={NextImgSrc("img/logo_welconx.webp")} type='image/webp' width='145px' height='auto' />
                        <source media="(min-width:640px)" srcSet={NextImgSrc("img/logo_welconx.png")} type='image/png' width='145px' height='auto' />
                        <img src={NextImgSrc("img/logo_welconx.png")} alt="Welconx Pinheiros" loading='eager' />
                    </picture>

                    <Hamb isOpen={open} setOpen={setOpen} />
                    <MenuMobile open={open} />
                    <MenuDesktop />

                </div>
            </header>
        </>
    )
}
export default Header;