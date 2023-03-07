
function Menu({ open }: { open: boolean }) {
    if (!open) return null;

    return (

        <nav className='menu1 flex flex-col justify-center bg-prim h-[100vh] text-left p-[2em] absolute -top-8 -right-8 z-10 nav transition-all tablet:w-1/3'>
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

            <a href="contato" className='menu_item'>
                Contato
            </a>

            <button className="flex justify-start items-center  font-bold menu_item text-white">
                Saiba mais
            </button>

        </nav>
    )
}

export default Menu;