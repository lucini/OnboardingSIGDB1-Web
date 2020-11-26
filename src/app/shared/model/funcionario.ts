export interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    dataContratacao?: Date;
    empresaId?: number;
    cargoId?: number;
}
