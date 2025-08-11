import { CaretRightIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
      <div className="h-full min-h-screen justify-center bg-red-800 text-white">
        <div className="flex flex-col text-lg gap-2">
          <Link to="/home" className="text-2xl font-bold">
            <img src="https://ik.imagekit.io/gengrupo03/genRH/genrh-logo-white.png" 
              alt="Logo da empresa GenRH" 
              className="w-[5vw] my-4 mx-auto transition-transform duration-100 hover:scale-125" />
          </Link>
          <Link to="/home" className="px-4 py-2 mt-4 hover:bg-red-600 font-semibold">Home</Link>
          <div className="relative group">
            <div className="px-4 py-2 hover:bg-red-600 w-full flex items-center justify-between text-left font-semibold">Funcionários<CaretRightIcon/></div>
            <div className="absolute top-0 w-56 left-full bg-red-800 invisible group-hover:visible flex flex-col shadow-lg">
              <Link to="/funcionarios" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Todos os funcionário</Link>
              <Link to="/cadastrarfuncionario" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Cadastrar funcionário</Link>
            </div>
          </div>
          <div className="relative group">
            <div className="px-4 py-2 hover:bg-red-600 w-full flex items-center justify-between text-left font-semibold">Departamentos<CaretRightIcon/></div>
            <div className="absolute top-0 w-56 left-full bg-red-800 invisible group-hover:visible flex flex-col shadow-lg">
              <Link to="/departamentos" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Todos os departamentos</Link>
              <Link to="/departamentos/cadastrar" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Adicionar departamentos</Link>
            </div>
          </div>
          <div className="relative group">
            <div className="px-4 py-2 hover:bg-red-600 w-full flex items-center justify-between text-left font-semibold">Recrutamento<CaretRightIcon/></div>
            <div className="absolute top-0 w-56 left-full bg-red-800 invisible group-hover:visible flex flex-col shadow-lg">
              <Link to="/manutencao" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Cadastrar nova vaga</Link>
              <Link to="/manutencao" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Vagas abertas</Link>
              <Link to="/manutencao" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Candidatos</Link>
            </div>
          </div>
          <div className="relative group">
            <div className="px-4 py-2 hover:bg-red-600 w-full flex items-center justify-between text-left font-semibold">Relatório<CaretRightIcon/></div>
            <div className="absolute top-0 w-56 left-full bg-red-800 invisible group-hover:visible flex flex-col shadow-lg">
              <Link to="/manutencao" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Banco de horas</Link>
              <Link to="/manutencao" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Indicadores</Link>
              <Link to="/manutencao" className="px-4 py-2 hover:bg-red-600 block w-full whitespace-nowrap">Benefícios</Link>
            </div>
          </div>
          <Link to="/manutencao" className="px-4 py-2 hover:bg-red-600 font-bold">Configurações</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar