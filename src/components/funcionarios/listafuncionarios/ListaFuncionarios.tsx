import { useNavigate } from "react-router-dom";
import TabelaFuncionarios from "../tabelafuncionario/TabelaFuncionarios";
import type Funcionario from "../../../models/Funcionario";
import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";

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
      <h1 className="text-3xl text-center font-semibold p-2 my-4">Funcionarios</h1>
      <div className="w-[70vw] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right border overflow-hidden my-5 text-gray-500 dark:text-gray-400">
          <thead className="text-md text-white uppercase bg-gray-50 dark:bg-slate-700">
            <tr className="bg-white border-b dark:bg-gray-500 dark:border-gray-700 text-center text-lg border-gray-200">
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Nome</th>
              <th scope="col" className="px-6 py-3">Salário</th>
              <th scope="col" className="px-6 py-3">Contrato</th>
              <th scope="col" className="px-6 py-3">Departamento</th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          {funcionarios.map((funcionario) => (
            <TabelaFuncionarios key={funcionario.id} funcionario={funcionario} />
          ))}
        </table>
      </div>
    </>
  );
}
export default ListaFuncionarios;
