import { Link } from "react-router-dom"
import type Departamento from "../../../models/Departamento"
import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react"


interface CartDepartamentoProps{
    departamento: Departamento
}

function CartDepartamento({departamento}: CartDepartamentoProps ) {

  return (
    <tr className="bg-white border hover:bg-gray-200 text-center">
      <td className="px-6 py-4 text-black text-lg">{departamento.descricao}</td>
      <td className="font-lg"><Link to={`/departamentos/editar/${departamento.id}`}><PencilSimpleIcon className="border bg-yellow-200 text-black text-2xl mx-auto"/></Link></td>
      <td className="font-lg"><Link to={`/departamentos/deletar/${departamento.id}`}><TrashIcon className="border bg-red-200 text-black text-2xl mx-auto"/></Link></td>
    </tr>
  )
}

export default CartDepartamento