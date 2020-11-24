import { Empresa } from './empresa';
import { Funcionario } from './funcionario';

export interface FuncionarioEmpresa {
    id: number;
    funcionario: Funcionario;
    empresa: Empresa;
}
