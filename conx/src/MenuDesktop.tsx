
function MenuDesktop() {

    return (

        <nav className='hidden laptop:flex  menu2 flex-row justify-around gap-4 laptop:flex-wrap items-center  text-left p-[2em] laptop:py-[2em] laptop:px-0 laptop:w-[85%] desktop:w-[80%] transition-all'>
            <a href="#home" className='menu_item'>
                Home
            </a>

            <a href="#local" className='menu_item'>
                Localização
            </a>

            <a href="#lazer" className='menu_item'>
                Lazer
            </a>

            <a href="#diferenciais" className='menu_item'>
                Diferenciais
            </a>

            <a href="#planta" className='menu_item'>
                Planta
            </a>

            <a href="#contato" className='menu_item'>
                Contato
            </a>

            <a href="#form-contato" className="uppercase flex justify-center items-center px-6 py-3 font-semibold bg-sub text-white rounded-md hover:bg-prim  transition-all">
                Fale com um consultor
            </a>

        </nav>
    )
}

export default MenuDesktop;