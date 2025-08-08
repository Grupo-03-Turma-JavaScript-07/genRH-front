import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Departamento from "../../../models/Departamento";
import { buscar, deletar } from "../../../services/Service";


function DeletarDepartamento() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [departamento, setDepartamento] = useState<Departamento>({} as Departamento);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarPorId(id: string) {
        try {
            await buscar(`/departamentos/${id}`, setDepartamento);
        } catch (error) {
            alert("Erro ao buscar  departamento");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarDepartamento() {
        setIsLoading(true);
        try {
            await deletar(`/departamentos/${id}`);
            alert('departamento deletado com sucesso!');
            navigate("/departamentos");
        } catch (error) {
            alert('Erro ao deletar departamento.');
        } finally {
            setIsLoading(false);
        }
    }

    function cancelar() {
        navigate("/departamentos");
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar departamento</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja deletar o departamento?
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Departamento
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{departamento.descricao}</p>
                <div className="flex gap-4">

                    <button 
                        className='text-white bg-red-500 hover:bg-red-700 w-full py-2 rounded'
                        onClick={cancelar}>
                        Não
                    </button>
                    
                    <button 
                        className='w-full text-white bg-indigo-600 hover:bg-indigo-800 py-2 rounded'
                        onClick={deletarDepartamento}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Deletando...' : 'Sim'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarDepartamento;

