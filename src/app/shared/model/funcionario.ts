export interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    dataContratacao?: Date;
    empresa?: string;
    cargo?: string;
}
