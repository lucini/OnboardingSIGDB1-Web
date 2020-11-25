import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '@shared/model/empresa';
import { BaseService } from '@shared/service/base.service';

@Injectable()
export class EmpresaService extends BaseService<Empresa> {
    constructor(protected http: HttpClient) {
        super(http, 'empresas');
    }
}
