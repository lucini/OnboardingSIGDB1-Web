import { Cargo } from "./cargo";
import { Empresa } from "./empresa";

export interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    dataContratacao: string;
    empresa: Empresa;
    cargo: Cargo;
}