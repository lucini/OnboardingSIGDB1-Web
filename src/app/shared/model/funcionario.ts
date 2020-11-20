import { Cargo } from "./cargo";
import { Empresa } from "./empresa";

export interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    dataContratacao?: string;
    empresas?: Empresa[];
    cargo?: Cargo;
}