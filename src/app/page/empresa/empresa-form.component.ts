import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CrudFormComponent } from '@shared/component/crud-form.component';
import { Empresa } from '@shared/model/empresa';

import { EmpresaService } from './empresa.service';

@Component({
    selector: 'app-empresa-form',
    templateUrl: 'empresa-form.component.html',
})

export class EmpresaFormComponent extends CrudFormComponent<Empresa> implements OnInit {

    constructor(protected service: EmpresaService,
        protected injector: Injector) {
        super(service, injector, 'empresa');
    }

    initForm(): void {
        this.formGroup = this.fb.group({
            id: [''],
            nome: ['', Validators.required],
            cnpj: ['', Validators.required],
            dataFundacao: ['', Validators.required],
        });
    }
}
