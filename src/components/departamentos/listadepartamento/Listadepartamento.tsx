import { useEffect, useState } from "react";
import type Departamento from "../../../models/Departamento";
import { buscar } from "../../../services/Service";
import { Link } from "react-router-dom";

function ListaDepartamento() {
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

  async function buscarDepartamentos() {
    await buscar("/departamentos", setDepartamentos);
  }

  useEffect(() => {
    buscarDepartamentos();
  }, []);

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container bg-white rounded-lg shadow">
        {departamentos.length === 0 ? (
          <p className="text-center text-xl p-4">Carregando departamentos...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Departamentos</th>
                  <th className="px-4 py-2 text-left">Edição</th>
                </tr>
              </thead>
              <tbody>
                {departamentos.map((dep) => (
                  <tr
                    key={dep.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">{dep.descricao}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <Link
                        to={`/departamentos/editar/${dep.id}`}
                        className="bg-red-400 hover:bg-red-800 text-white px-3 py-1 rounded"
                      >
                        Editar
                      </Link>
                      <Link
                        to={`/departamentos/deletar/${dep.id}`}
                        className="bg-red-400 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Deletar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListaDepartamento