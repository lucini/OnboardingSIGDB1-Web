import { Funcionario } from '@shared/model/funcionario';

import { Cargo } from './cargo';

export class FuncionarioCargo {
    funcionario: Funcionario;
    cargo: Cargo;
    dataVinculo: Date;

    constructor(funcionario?: Funcionario) {
        if (funcionario) {
            this.funcionario = funcionario;
            this.dataVinculo = new Date();
        }
    }
}
