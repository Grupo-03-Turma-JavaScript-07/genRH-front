import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center bg-red-800 text-white">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            <img src="https://ik.imagekit.io/gengrupo03/genRH/genrh-logo-white.png" alt="Logo da empresa GenRH" className="h-[7vh] m-2" />
          </Link>
          <div className="flex items-center text-xl">
            <Link to="/home" className="px-4 py-6 hover:bg-red-600">Inicio</Link>
            <Link to="/funcionarios" className="px-4 py-6 hover:bg-red-600">Funcionarios</Link>
            <Link to="/cadastrarfuncionario" className="px-4 py-6 hover:bg-red-600">Cadastrar Func.</Link>
            <Link to="/departamentos" className="px-4 py-6 hover:bg-red-600">Departamentos</Link>
            <Link to="/cadastrardepartamento" className="px-4 py-6 hover:bg-red-600">Cadastrar Depart.</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar