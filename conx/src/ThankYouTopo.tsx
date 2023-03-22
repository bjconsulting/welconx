import NextImgSrc from './NextImgSrc';

export default function ThankYou() {
  return(
    <div className="text-center text-[#FDFDFD] flex flex-col items-center">
      <div className="text-3xl font-bold mt-10 mb-7">Agradecemos o contato.</div>
      <img className='w-24 aspect-square mb-7' src={NextImgSrc("img/ok-icon.svg")} alt='Ícone de Ok' loading='lazy'/>
    </div>
  )
}