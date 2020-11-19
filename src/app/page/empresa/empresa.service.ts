import { Injectable } from '@angular/core';
import { empresas } from '../../../data/data-api';
import { Empresa } from '../../shared/model/empresa';
import { BaseService } from '../../shared/service/base.service';

@Injectable()
export class EmpresaService extends BaseService<Empresa> {
    constructor() { 
        super(empresas);
    }
}