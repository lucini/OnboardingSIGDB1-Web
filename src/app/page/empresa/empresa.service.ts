import { Injectable } from '@angular/core';
import { Empresa } from '@shared/model/empresa';
import { BaseService } from '@shared/service/base.service';

import { empresas } from '../../../data/data-api';

@Injectable()
export class EmpresaService extends BaseService<Empresa> {
    constructor() {
        super(empresas);
    }
}
