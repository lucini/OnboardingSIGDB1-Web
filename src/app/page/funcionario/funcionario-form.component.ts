import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CrudFormComponent } from '@shared/component/crud-form.component';
import { DATE_PICKER_OPTION } from '@shared/constant/constant';
import { Funcionario } from '@shared/model/funcionario';

import { FuncionarioService } from './funcionario.service';

@Component({
    selector: 'app-funcionario-form',
    templateUrl: 'funcionario-form.component.html',
})

export class FuncionarioFormComponent extends CrudFormComponent<Funcionario> implements OnInit {

    dpOptions = DATE_PICKER_OPTION;

    setDate(): void {
        // Set today date using the patchValue function
        const date = new Date();
        this.formGroup.patchValue({
            dataContratacao: {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate(),
                },
            },
        });
    }

    clearDate(): void {
        this.formGroup.patchValue({ dataContratacao: null });
    }

    constructor(protected service: FuncionarioService,
        protected injector: Injector) {
        super(service, injector, 'funcionario');
    }

    initForm(): void {
        this.formGroup = this.fb.group({
            id: [null],
            nome: ['', Validators.required],
            cpf: ['', Validators.required],
            dataContratacao: [new Date()],
            empresas: [[]],
        });
    }
}
