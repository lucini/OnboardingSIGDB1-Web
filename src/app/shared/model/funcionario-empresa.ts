import { Empresa } from './empresa';
import { Funcionario } from './funcionario';

export class FuncionarioEmpresa {
    id: number;
    funcionario: Funcionario;
    empresa: Empresa;

    constructor(funcionario?: Funcionario) {
        if (funcionario) {
            this.funcionario = funcionario;
        }
    }
}
