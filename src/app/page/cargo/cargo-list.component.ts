import { Cargo } from '@shared/model/cargo';
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { CrudListComponent } from '@shared/component/crud-list.component';
import { CargoService } from './cargo.service';

@Component({
    selector: 'app-cargo-list',
    templateUrl: 'cargo-list.component.html',
})

export class CargoListComponent extends CrudListComponent<Cargo> {

    constructor(protected service: CargoService,
        protected injector: Injector) {
        super(service, injector, 'cargo');
    }
}
