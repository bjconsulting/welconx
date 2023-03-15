export default function Dobra10() {
  return(
    <div className='w-full flex flex-col tablet:flex-row items-start text-center justify-evenly gap-8 pt-20 pb-20 font-semibold text-base'>
      <div className='flex flex-col gap-8 mx-auto'>
        <div className='uppercase'>Intermediação:</div>
        <div className='flex flex-row gap-9 justify-center items-center'>
          <img src="img/conx-vendas2.png" alt="Logo da empresa Conx Vendas"/>
          <img src="img/houzi-logo.png" alt="Logo da empresa Houzi Soluções Imobiliárias"/>
        </div>
      </div>
      <div className='flex flex-col gap-8 mx-auto'>
        <div className='uppercase'>Incorporação e construção:</div>
        <div className='flex justify-center items-center'>
          <img src="img/conx-logo.png" alt="Logo da empresa Conx"/>
        </div>
      </div>
    </div>
  )
}