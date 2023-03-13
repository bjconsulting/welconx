import conxVendas from './img/conx-vendas2.png'
import houzi from './img/houzi-logo.png'
import conxLogo from './img/conx-logo.png'

export default function Dobra10() {
  return(
    <div className='w-full flex flex-col items-center text-center gap-8 justify-center pt-20 pb-20 font-semibold text-base tablet:flex-row tablet:items-start tablet:text-center :justify-evenly'>
      <div className='flex flex-col gap-8'>
        <div className='uppercase'>Intermediação:</div>
        <div className='flex flex-col gap-9 tablet:flex-row'>
          <img src={conxVendas} alt="Logo da empresa Conx Vendas"/>
          <img src={houzi} alt="Logo da empresa Houzi Soluções Imobiliárias"/>
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='uppercase'>Incorporação e construção:</div>
        <div className='flex justify-center'>
          <img src={conxLogo} alt="Logo da empresa Conx"/>
        </div>
      </div>
    </div>
  )
}