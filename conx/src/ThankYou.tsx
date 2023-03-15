import NextImgSrc from './NextImgSrc';

export default function ThankYou() {
  return(
    <div className="w-full rounded-2xl bg-white text-center flex flex-col items-center pt-9 pb-20 gap-8">
      <div className="text-3xl font-bold mt-[5.721rem] mb-16">Agradecemos o contato</div>
      <img className='w-24 aspect-square mb-12' src={NextImgSrc("img/ok-icon.svg")} alt='Ícone de Ok' loading='lazy'/>
    </div>
  )
}