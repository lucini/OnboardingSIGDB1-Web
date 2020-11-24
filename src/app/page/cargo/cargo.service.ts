import { Injectable } from '@angular/core';
import { Cargo } from '@shared/model/cargo';
import { BaseService } from '@shared/service/base.service';

import { cargos } from '../../../data/data-api';

@Injectable()
export class CargoService extends BaseService<Cargo> {
    constructor() {
        super(cargos);
    }
}
