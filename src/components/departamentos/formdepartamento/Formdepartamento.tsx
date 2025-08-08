import type Departamento from "../../../models/Departamento";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { type ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function FormDepartamento() {

  const navigate = useNavigate();
  const [departamento, setDepartamento] = useState<Departamento>({} as Departamento);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function buscarPorId(id: string) {
    try {
      setIsLoading(true);
      await buscar(`/departamentos/${id}`, setDepartamento);
    } catch (error) {
      alert("Erro ao buscar departamento");
    } finally {
      setIsLoading(false);
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setDepartamento({
      ...departamento,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/departamentos");
  }

  async function NovoDepartamento(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        const departamentoId = { ...departamento, id: Number(id) };
        await atualizar(`/departamentos`, departamentoId, setDepartamento);
        alert("Departamento atualizado com sucesso!");
      } else {
        await cadastrar(`/departamentos`, departamento, setDepartamento);
        alert("Departamento cadastrado com sucesso!");
      }

      retornar();

    } catch (error) {
      alert("Erro ao salvar categoria.");
    }
  }

  if (id !== undefined && isLoading) {
    return <p className="text-center text-xl">Carregando dados do departamento...</p>;
  }

  return (

    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar departamento" : "Editar departamento"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={NovoDepartamento}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Departamento</label>
          <input
            type="text"
            placeholder="Nome do departamento"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={departamento.descricao || ""}
            onChange={atualizarEstado}
            required
          />
        </div>

        <button
          className="rounded text-slate-100 bg-red-400 hover:bg-indigo-700 w-1/2 py-2 mx-auto"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Atualizar"}
        </button>

      </form>
    </div>
  );
}

export default FormDepartamento;