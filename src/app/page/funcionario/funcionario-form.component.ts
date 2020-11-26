import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CrudFormComponent } from '@shared/component/crud-form.component';
import { Funcionario } from '@shared/model/funcionario';

import { FuncionarioService } from './funcionario.service';

@Component({
    selector: 'app-funcionario-form',
    templateUrl: 'funcionario-form.component.html',
})

export class FuncionarioFormComponent extends CrudFormComponent<Funcionario> implements OnInit {

    constructor(protected service: FuncionarioService,
        protected injector: Injector) {
        super(service, injector, 'funcionario');
    }

    initForm(): void {
        this.formGroup = this.fb.group({
            id: [null],
            nome: ['', Validators.required],
            cpf: ['', Validators.required],
            dataContratacao: [null],
            empresaId: [null],
            cargoId: [null],
        });
    }
}
