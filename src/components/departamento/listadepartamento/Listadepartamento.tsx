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
        {departamentos.length === 0 ? (
          <p className="text-center text-xl">Carregando departamentos...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departamentos.map((departamento) => (
              <CartDepartamento key={departamento.id} departamento={departamento} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaDepartamento;

