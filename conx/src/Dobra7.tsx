import NextImgSrc from './NextImgSrc';

function Dobra7(){
    return(
        <div className="laptop:px-24 px-4 relative flex desktop:flex-row laptop:flex-row gap-24 justify-start items-center bg-prim pt-8  flex-col-reverse laptop:min-h-[60vh] laptop:h-[60vh]  laptop:max-h-[65vh]">
            <div className=" basis-[55%] flex flex-col gap-6 laptop:py-6">
                <h3 className="text-[#FEFEFE] text-[1.7em] laptop:text-[2em] font-semibold text-center laptop:text-left">
                    Um projeto integrado à atmosfera do bairro.
                </h3>

                <p className="font-light laptop:text-2xl laptop:leading-[1.8rem] text-left text-[#FEFEFE] pb-8 laptop:text-[1em] ">
                    Novas formas de viver, um novo jeito de pertencer. Agora, suas escolhas são prioridades. É você na sua melhor versão, é você no lugar certo. Onde o urbano se envolve e conecta. Onde tudo é intenso, possível e acontece ao mesmo tempo. Morar com estilo e praticidade, somado ao privilégio de estar em um dos bairros mais desejados da cidade, com o mundo ao seu alcance.
                </p>
            </div>

            <div className="relative basis-[45%] h-full w-full">
                <img src={NextImgSrc("img/fachada.jpg")} alt="Fachada Eugênio" className='max-w-[300px] laptop:max-w-[300px] desktop:max-w-[320px] desktop-big:max-w-[360px] laptop:absolute bottom-0 right-2 rounded-tl-lg rounded-tr-lg' loading='lazy'/>
                <p className='absolute right-8 bottom-3 uppercase text-[12px] text-white'>PERSPECTIVA ILUSTRADA DA FACHADA</p>
            </div>
        </div>
    )
}

export default Dobra7;