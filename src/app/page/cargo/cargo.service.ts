import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '@shared/model/cargo';
import { BaseService } from '@shared/service/base.service';


@Injectable()
export class CargoService extends BaseService<Cargo> {
    constructor(protected http: HttpClient) {
        super(http, 'cargos');
    }
}
