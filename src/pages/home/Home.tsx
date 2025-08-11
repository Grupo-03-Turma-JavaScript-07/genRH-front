const hora = new Date().getHours();

function Home() {
    return (
          <section className="grid grid-cols-3 bg-white rounded-lg h-[40vw]">
      {/* Coluna Esquerda */}
      <div>
        <img
          src="https://ik.imagekit.io/gengrupo03/handshake.gif?updatedAt=1754669148690"
          alt="Imagem grupo de colaboradores conversando"
          className="rounded-lg w-full h-full object-cover shadow-xl/30"
        />
      </div>

      {/* Coluna Direita com background ocupando tudo */}
      <div className="col-span-2 justify-items-center rounded-lg shadow-xl/30 bg-[url('https://ik.imagekit.io/gengrupo03/genRH/image.png?updatedAt=1754673810696')] bg-cover bg-center">
        <img
          src="https://ik.imagekit.io/gengrupo03/genRH/genrh-logo-red.png?updatedAt=1754660388110"
          alt="Logo GenRH"
          className=" rounded-lg w-xs mb-6"
        />
              {hora < 12 ? (
                <h1 className='text-6xl text-red-900 font-bold mb-10'>Bom dia!</h1>
              ) : hora < 18 ? (
                <h1 className='text-6xl text-red-900 font-bold mb-10 drop-shadow-[0_0_6px_rgba(255,255,255,1)]'>Boa tarde!</h1>
              ) : (
                <h1 className='text-6xl text-red-900 font-bold mb-10'>Boa noite!</h1>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12 mx-4">
                <div className="text-nowrap font-bold text-3xl md:text-2x1 drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
                  Tecnologia que valoriza pessoas
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-3 text-nowrap font-bold text-3xl md:text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
                  Simplifique o RH. Potencialize resultados
                </div>
                <div className="col-span-1 sm:col-span-2 font-bold text-3xl md:text-2xl text-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
                  Tudo para o seu RH, em um só lugar
                </div>
              </div>
            </div> 
          </section>
    )
}

export default Home