const hora = new Date().getHours();

function Home() {
    return (
          <section className="grid grid-flow-col grid-rows-2  bg-white rounded-lg">
            <div className="row-span-2">
              <img
                src="https://ik.imagekit.io/gengrupo03/handshake.gif?updatedAt=1754669148690"
                alt="Imagem grupo de colaboradores conversando "
                className="rounded-lg w-[full] h-[40vw] object-cover shadow-xl/30 mask-radial-from-80%"
              />
            </div>

            <div className="row-start-1 row-end-4 justify-items-center mask-radial-at-center mask-radial-from-80%
            bg-[url('https://ik.imagekit.io/gengrupo03/genRH/image.png?updatedAt=1754673810696')] bg-cover w-[full] h-full rounded-lg shadow-xl/30">
              <img
                src="https://ik.imagekit.io/gengrupo03/genRH/genrh-logo-red.png?updatedAt=1754660388110"
                alt="Logo GenRH"
                className="rounded-lg w-xs mb-15 "/>
              {hora < 12 ? (
                <h2 className='text-5xl font-bold'>Bom dia!</h2>
              ) : hora < 18 ? (
                <h2 className='text-5xl font-bold'>Boa tarde!</h2>
              ) : (
                <h2 className='text-5xl font-bold'>Boa noite!</h2>
              )}

              <div className="grid grid-cols-3 pb-12 justify-items-end gap-4 m-12">
                <div className=" col-span-2 font-bold text-3xl drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Tecnologia que valoriza pessoas</div>
                <div className=" col-span-2 font-bold text-3xl drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Simplifique o RH. Potencialize resultados</div>
                <div className=" col-span-2 justify-end font-bold text-3xl drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Tudo que seu RH precisa, em um só lugar</div>
              </div>
            </div>
          </section>
    )
}

export default Home