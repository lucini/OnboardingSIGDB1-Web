import { Injectable } from '@angular/core';
import { funcionarios } from '../../../data/data-api';
import { Funcionario } from '../../shared/model/funcionario';
import { BaseService } from '../../shared/service/base.service';

@Injectable()
export class FuncionarioService extends BaseService<Funcionario> {
    constructor() { 
        super(funcionarios);
    }
}