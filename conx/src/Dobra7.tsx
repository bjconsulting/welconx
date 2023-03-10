import fachada from './img/fachada.jpg'

function Dobra7(){
    return(
        <div className="laptop:px-24 px-4 relative flex flex-col laptop:flex-row gap-24 justify-center items-center bg-prim pt-8 laptop:py-[8em]">
            <div className="basis-[55%] flex flex-col gap-6">
                <h3 className="text-[#FEFEFE] text-[1.7em] laptop:text-[2.4em] font-semibold text-center laptop:text-left">
                    Um projeto integrado à atmosfera do bairro.
                </h3>

                <p className="font-light laptop:text-2xl laptop:leading-[2.7rem] text-left text-[#FEFEFE]">
                    Novas formas de viver, um novo jeito de pertencer. Agora, suas escolhas são prioridades. É você na sua melhor versão, é você no lugar certo. Onde o urbano se envolve e conecta. Onde tudo é intenso, possível e acontece ao mesmo tempo. Morar com estilo e praticidade, somado ao privilégio de estar em um dos bairros mais desejados da cidade, com o mundo ao seu alcance.
                </p>
            </div>

            <div className=" basis-[45%] h-full">
                <img src={fachada} alt="Fachada Eugênio"  className='max-w-[300px] laptop:max-w-[450px] laptop:absolute bottom-0 right-[10%] rounded-tl-lg rounded-tr-lg' loading='lazy'/>
            </div>
        </div>
    )
}

export default Dobra7;