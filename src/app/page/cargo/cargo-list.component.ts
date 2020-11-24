import { Component, Injector } from '@angular/core';
import { CrudListComponent } from '@shared/component/crud-list.component';
import { Cargo } from '@shared/model/cargo';

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
