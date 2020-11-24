import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { CrudListComponent } from '../../shared/component/crud-list.component';
import { Funcionario } from '../../shared/model/funcionario';
import { FuncionarioService } from './funcionario.service';

@Component({
    selector: 'app-funcionario-list',
    templateUrl: 'funcionario-list.component.html',
})

export class FuncionarioListComponent extends CrudListComponent<Funcionario>  {

    constructor(protected service: FuncionarioService,
        protected injector: Injector) {
        super(service, injector, 'funcionario');
        this.actions = [
            { title: 'Vincular Empresa'},
            { title: 'Vincular Cargo'},
        ];
    }
}
