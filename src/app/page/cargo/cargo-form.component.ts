import { Component, Injector } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudFormComponent } from '../../shared/component/crud-form.component';
import { Cargo } from '../../shared/model/cargo';
import { CargoService } from './cargo.service';

@Component({
    selector: 'app-cargo-form',
    templateUrl: 'cargo-form.component.html'
})

export class CargoFormComponent extends CrudFormComponent<Cargo> {

    constructor(protected service: CargoService,
        protected injector: Injector) {
        super(service, injector, 'cargo');
    }

    initForm(): void {
        this.formGroup = this.fb.group({
            id: [''],
            descricao: ['', Validators.required],
        });
    }
}
