import type Funcionario from "./Funcionario";

export default interface Categoria{
    id: number;
    nome: string;
    descricao: string;
    Funcionario: Funcionario[];
}