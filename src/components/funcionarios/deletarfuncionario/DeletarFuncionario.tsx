import { useNavigate, useParams } from "react-router-dom";
import type Funcionario from "../../../models/Funcionario";
import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";

function DeletarFuncionario() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [funcionario, setFuncionario] = useState<Funcionario>({} as Funcionario);

  const [departamento, setDepartamento] = useState<Departamento>({} as Departamento);

  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
    try {
      await buscar(`/funcionario/${id}`, setFuncionario);
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

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar os dados do funcionário a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Funcionário
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{funcionario.nome}</p>
          <p>{departamento.nome}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarFuncionario}
          >
            {isLoading ? : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarFuncionario;