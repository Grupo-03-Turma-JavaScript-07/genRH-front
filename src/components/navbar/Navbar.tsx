import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
      <div className="h-full min-h-screen justify-center bg-red-800 text-white">
        <div className="flex flex-col text-lg">
          <Link to="/home" className="text-2xl font-bold">
            <img src="https://ik.imagekit.io/gengrupo03/genRH/genrh-logo-white.png" 
              alt="Logo da empresa GenRH" 
              className="w-[5vw] my-4 mx-auto transition-transform duration-100 hover:scale-125" />
          </Link>
          <div className="flex flex-col text-xl">
            <Link to="/home" className="px-4 py-4 hover:bg-red-600">Inicio</Link>
            <Link to="/funcionarios" className="px-4 py-4 hover:bg-red-600">Funcionarios</Link>
            <Link to="/cadastrarfuncionario" className="px-4 py-4 hover:bg-red-600">Cadastrar Func.</Link>
            <Link to="/departamentos" className="px-4 py-4 hover:bg-red-600">Departamentos</Link>
            <Link to="/cadastrardepartamento" className="px-4 py-4 hover:bg-red-600">Cadastrar Depart.</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar