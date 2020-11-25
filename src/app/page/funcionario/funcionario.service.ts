import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '@shared/model/funcionario';
import { BaseService } from '@shared/service/base.service';


@Injectable()
export class FuncionarioService extends BaseService<Funcionario> {
    constructor(protected http: HttpClient) {
        super(http, 'funcionarios');
    }
}
