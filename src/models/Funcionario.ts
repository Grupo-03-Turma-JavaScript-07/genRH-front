import type Departamento from "./Departamento";

export default interface Funcionario {
    id: number;
    nome: string;
    salario: number;
    cpf: string;
    contrato: number;
    departamento: Departamento | null;
}