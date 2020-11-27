import { Funcionario } from '@shared/model/funcionario';

import { Cargo } from './cargo';

export class FuncionarioCargo {
    funcionario: Funcionario;
    cargo: Cargo;

    constructor(funcionario?: Funcionario) {
        if (funcionario) {
            this.funcionario = funcionario;
        }
    }
}
