import { useEffect, useState, type ChangeEvent } from "react";
import type Funcionario from "../../../models/Funcionario";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormPostagem() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);

  const tipoContrato = [{id: 1, tipo: "CLT"}, {id: 2, tipo: "PJ"}, {id: 3, tipo: "Trainee"}, {id: 4, tipo: "Estagio"}];
  const [contrato, setContratos] = useState<tipoContrato>({ id: 0, tipo: "" });

  const [departamento, setDepartamento] = useState<Departamento>({ id: 0, descricao: "" });
  const [funcionario, setFuncionario] = useState<Funcionario>({} as Funcionario);

  const { id } = useParams<{ id: string }>();

  async function buscarFuncionarioPorId(id: string) {
    try {
      await buscar(`/funcionario/${id}`, setFuncionario);
    } catch (error: any) {}
  }

  async function buscarDepartamentoPorId(id: string) {
    try {
      await buscar(`/departamento/${id}`, setDepartamento);
    } catch (error: any) {}
  }

  async function buscarDepartamentos() {
    try {
      await buscar("/categorias", setDepartamentos);
    } catch (error: any) {}
  }


  useEffect(() => {
    buscarDepartamentos();

    if (id !== undefined) {
      buscarFuncionarioPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setFuncionario({
      ...funcionario,
      departamento: departamento,
    });
  }, [departamento]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setFuncionario({
      ...funcionario,
      [e.target.name]: e.target.value,
      departamento: departamento,
    });
  }

  function retornar() {
    navigate("/funcionarios");
  }

  async function gerarNovoFuncionario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/funcionarios`, funcionario, setFuncionario);

        alert("Funcionario atualizado com sucesso");
      } catch (error: any) {}
    } else {
      try {
        await cadastrar(`/funcionarios`, funcionario, setFuncionario);

        alert("Funcionario cadastrado com sucesso");
      } catch (error: any) {}
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoDepartamento = departamento.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Postagem" : "Cadastrar Funcionário"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoFuncionario}>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Nome do Funcionário</label>
          <input
            type="text"
            placeholder="Informe o nome completo do funcionário"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={funcionario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">CPF</label>
          <input
            type="text"
            placeholder="Informe o CPF do funcionário"
            name="CPF"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={funcionario.cpf}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Salário</label>
          <input
            type="text"
            placeholder="Informe o salário do funcionário"
            name="Salario"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={funcionario.salario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Contrato do Funcionário</p>
          <select
            name="contrato"
            id="contrato"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarDepartamentoPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione o tipo de Contrato
            </option>

            {contrato.map((contrato) => (
              <>
                <option value={contrato.id}>{contrato.tipo}</option>
              </>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Departamento do Funcionário</p>
          <select
            name="departamento"
            id="departamento"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarDepartamentoPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione o Departamento
            </option>

            {departamentos.map((departamento) => (
              <>
                <option value={departamento.id}>{departamento.descricao}</option>
              </>
            ))}
          </select> 
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoDepartamento}
        >
          {isLoading ? : (
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormPostagem;
