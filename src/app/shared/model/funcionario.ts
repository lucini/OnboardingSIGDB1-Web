export interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    dataContratacao?: string;
    empresaId?: number;
    cargoId?: number;
}
