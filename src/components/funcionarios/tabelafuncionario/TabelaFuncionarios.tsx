import { Link } from "react-router-dom";
import type Funcionario from "../../../models/Funcionario"

interface TabelaFuncionariosProps{
  funcionario: Funcionario
}

function TabelaFuncionarios({funcionario} : TabelaFuncionariosProps) {
  return (
    <div
      className="border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between"
    >
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <h3 className="text-lg font-bold text-center uppercase">
            {funcionario.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{funcionario.cpf}</h4>
          <p>{funcionario.salario}</p>
          <p>
            Data:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(funcionario.contrato))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarfuncionario/${funcionario.id}`}
          className="w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarfuncionario/${funcionario.id}`}
          className="text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default TabelaFuncionarios