import { Injectable } from '@angular/core';
import { cargos } from '../../../data/data-api';
import { Cargo } from '../../shared/model/cargo';
import { BaseService } from '../../shared/service/base.service';

@Injectable()
export class CargoService extends BaseService<Cargo> {
    constructor() { 
        super(cargos);
    }
}