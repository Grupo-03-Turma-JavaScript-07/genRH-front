import { useEffect, useState } from "react";
import type Departamento from "../../../models/Departamento";
import { buscar } from "../../../services/Service";
import CartDepartamento from "../cartdepartamento/CartDepartamento";



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
      <div className="container flex flex-col">
        <h1 className="text-3xl text-center font-semibold p-2 my-4">Departamentos</h1>
        {departamentos.length === 0 ? (
          <p className="text-center text-xl">Carregando departamentos...</p>
        ) : (
          <>
            <div className="w-[70vw] mx-auto">
              <table className="w-full text-sm text-left rtl:text-right border overflow-hidden text-gray-500 dark:text-gray-400">
                <thead className="text-md text-white uppercase bg-gray-50 dark:bg-slate-700">
                  <tr className="bg-white border-b dark:bg-gray-500 dark:border-gray-700 text-center text-lg border-gray-200">
                    <th scope="col" className="px-6 py-3">Departamento</th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                {departamentos.map((departamento) => (
                  <CartDepartamento key={departamento.id} departamento={departamento} />
                ))}
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ListaDepartamento;

