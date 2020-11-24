import { Cargo } from '../app/shared/model/cargo';
import { Empresa } from '../app/shared/model/empresa';
import { Funcionario } from '../app/shared/model/funcionario';

export const cargos: Cargo[] = [
    {id: 1, descricao: 'Baixista'},
    {id: 2, descricao: 'Baterista'},
    {id: 3, descricao: 'Guitarrista'},
    {id: 4, descricao: 'Vocalista'},
    {id: 5, descricao: 'Tecladista'},
    {id: 6, descricao: 'Gaitero'},
];

export const empresas: Empresa[] = [
    {id: 1, nome: 'Mötorhead', cnpj: '96004688000157', dataFundacao: ''},
    {id: 2, nome: 'Megadeth', cnpj: '60149614000161', dataFundacao: ''},
    {id: 3, nome: 'Metallica', cnpj: '28608185000130', dataFundacao: ''},
];

export const funcionarios: Funcionario[] = [
    {id: 1, nome: 'Lemmy Kilmister', cpf: '32540181090', empresas: empresas},
    {id: 2, nome: 'James Hetfield', cpf: '32540181090', empresas: [empresas[2]]},
];
