import okIcon from './img/ok-icon.svg'

export default function ThankYou() {
  return(
    <div className="w-full rounded-2xl bg-white text-center flex flex-col items-center pt-9 pb-20 gap-8">
      <div className="text-base">Agradecemos o contato</div>
      <div className="text-2xl font-bold">Logo um consultor<br/>entrará em contato.</div>
      <img className='w-24 aspect-square' src={okIcon} alt='Ícone de Ok'/>
    </div>
  )
}