import { Cargo } from "../app/shared/model/cargo";
import { Empresa } from "../app/shared/model/empresa";

export const cargos: Cargo[] = [
    {id: 1, descricao: 'Baixista'},
    {id: 2, descricao: 'Baterista'},
    {id: 3, descricao: 'Guitarrista'},
    {id: 4, descricao: 'Vocalista'},
    {id: 5, descricao: 'Tecladista'},
    {id: 6, descricao: 'Gaitero'},
];

export const empresas: Empresa[] = [
    {id: 1, nome: 'Mötorhead', cnpj:'', dataFundacao: ''},
    {id: 2, nome: 'Megadeth', cnpj:'', dataFundacao: ''},
    {id: 3, nome: 'Metallica', cnpj:'', dataFundacao: ''},
];