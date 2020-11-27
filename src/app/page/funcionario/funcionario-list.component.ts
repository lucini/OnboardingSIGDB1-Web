import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudListComponent } from '@shared/component/crud-list.component';
import { Funcionario } from '@shared/model/funcionario';
import { FuncionarioFiltro } from '@shared/model/funcionario-filtro';

import { FuncionarioService } from './funcionario.service';

@Component({
    selector: 'app-funcionario-list',
    templateUrl: 'funcionario-list.component.html',
})

export class FuncionarioListComponent extends CrudListComponent<Funcionario, FuncionarioFiltro>  {

    formVincularEmpresa: FormGroup;

    constructor(protected service: FuncionarioService,
        protected injector: Injector,
        private fb: FormBuilder) {
        super(service, injector, 'funcionario');
        this.actions = [
            { title: 'Vincular Empresa', modal: true, targetModal: 'vincular-empresa' },
            { title: 'Vincular Cargo', modal: true, targetModal: 'vincular-cargo' },
        ];
    }

    vincularEmpresa(): void {

    }

    initFormModal(): void {
        this.formVincularEmpresa = this.fb.group({
            id: [null],
        });
    }

    resetFilter(): void {
        this.filter = new FuncionarioFiltro();
    }
}
