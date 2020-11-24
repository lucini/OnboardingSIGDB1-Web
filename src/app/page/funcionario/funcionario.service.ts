import { Injectable } from '@angular/core';
import { Funcionario } from '@shared/model/funcionario';
import { BaseService } from '@shared/service/base.service';

import { funcionarios } from '../../../data/data-api';

@Injectable()
export class FuncionarioService extends BaseService<Funcionario> {
    constructor() {
        super(funcionarios);
    }
}
