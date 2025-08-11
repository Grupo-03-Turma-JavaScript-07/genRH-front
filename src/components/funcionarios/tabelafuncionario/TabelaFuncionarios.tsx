import { Link } from "react-router-dom";
import type Funcionario from "../../../models/Funcionario";
import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";

interface TabelaFuncionariosProps{
  funcionario: Funcionario
}

function TabelaFuncionarios({funcionario} : TabelaFuncionariosProps) {

    const contract:number = funcionario.contrato
    let contractname:string = ""
    switch(contract){
      case 1:
        contractname = "CLT";
        break;
      case 2:
        contractname = "PJ";
        break;
      case 3:
        contractname = "Trainee";
        break;
      case 4:
        contractname = "Estágio";
        break;
    }

  return (
    <tr className="bg-white border hover:bg-gray-200 text-center">
      <td className="px-6 py-4 text-black text-lg">{funcionario.id}</td>
      <td className="px-6 py-4 text-black text-lg">{funcionario.nome}</td>
      <td className="px-6 py-4 text-black text-lg">R$ {funcionario.salario}</td>
      <td className="px-6 py-4 text-black text-lg">{contractname}</td>
      <td className="px-6 py-4 text-black text-lg">{funcionario.departamento?.descricao}</td>
      <td className="font-lg"><Link to={`/editarfuncionario/${funcionario.id}`}><PencilSimpleIcon className="border bg-yellow-200 text-black text-2xl mx-auto"/></Link></td>
      <td className="font-lg"><Link to={`/deletarfuncionario/${funcionario.id}`}><TrashIcon className="border bg-red-200 text-black text-2xl mx-auto"/></Link></td>
    </tr>
  );
}

export default TabelaFuncionarios