import { useNavigate } from "react-router-dom";
import TabelaFuncionarios from "../tabelafuncionario/TabelaFuncionarios";
import type Funcionario from "../../../models/Funcionario";
import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { Dna } from "@phosphor-icons/react";

function ListaFuncionarios() {
  const navigate = useNavigate();

  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);


  async function buscarFuncionarios() {
    try {
      await buscar("/funcionarios", setFuncionarios);
    } catch (error: any) {}
  }


  useEffect(() => {
    buscarFuncionarios();
  }, [funcionarios.length]);

  return (
    <>
      {funcionarios.length === 0}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div
            className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {funcionarios.map((funcionario) => (
              <TabelaFuncionarios key={funcionario.id} funcionario={funcionario} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaFuncionarios;
