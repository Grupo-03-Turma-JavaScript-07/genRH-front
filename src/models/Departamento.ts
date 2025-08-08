import type Funcionario from "./Funcionario";

export default interface Departamento{
    id: number;
    nome: string;
    descricao: string;
    Funcionario: Funcionario[];
}