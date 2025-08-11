import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Departamento from "../../../models/Departamento";
import type Funcionario from "../../../models/Funcionario";
import { buscar, deletar } from "../../../services/Service";

function DeletarFuncionario() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [funcionario, setFuncionario] = useState<Funcionario>({} as Funcionario);

  const [departamento, setDepartamento] = useState<Departamento>({} as Departamento);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/funcionarios/${id}`, setFuncionario);
    } catch (error: any) {}
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarFuncionario() {
    setIsLoading(true);

    try {
      await deletar(`/funcionarios/${id}`);

      alert("Funcionario apagado com sucesso");
    } catch (error: any) {}

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/funcionarios");
  }

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
      default:
        contractname = "";
        break;
    }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar os dados do funcionário a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white text-center font-bold text-2xl">
          {funcionario.nome}
        </header>
        <div className="">
          <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>Departamento:</strong> {funcionario.departamento?.descricao}</p>
          <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>CPF:</strong> {funcionario.cpf}</p>
          <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>Salário:</strong> {funcionario.salario}</p>
          <p className='py-2 px-4 text-lg bg-slate-200 h-full'><strong>Contrato:</strong> {contractname}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarFuncionario}
          >
            <span>Sim</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarFuncionario;