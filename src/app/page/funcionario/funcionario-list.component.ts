import { Component, Injector } from '@angular/core';
import { FuncionarioEmpresa } from '@app/shared/model/funcionario-empresa';
import { CrudListComponent } from '@shared/component/crud-list.component';
import { Empresa } from '@shared/model/empresa';
import { Funcionario } from '@shared/model/funcionario';
import { FuncionarioFiltro } from '@shared/model/funcionario-filtro';
import { Observable } from 'rxjs/Observable';
import { EmpresaService } from '../empresa/empresa.service';

import { FuncionarioService } from './funcionario.service';

@Component({
    selector: 'app-funcionario-list',
    templateUrl: 'funcionario-list.component.html',
})

export class FuncionarioListComponent extends CrudListComponent<Funcionario, FuncionarioFiltro>  {

    funcionarioEmpresaForm = new FuncionarioEmpresa();
    empresaOptions$: Observable<Empresa[]>;

    constructor(protected service: FuncionarioService,
        protected injector: Injector,
        private empresaService: EmpresaService) {
        super(service, injector, 'funcionario');
        this.actions = [
            {
                title: 'Vincular Empresa',
                modal: true,
                targetModal: 'vincular-empresa',
                click: func => this.abrirModalVinculo(func),
            },
            { title: 'Vincular Cargo', modal: true, targetModal: 'vincular-cargo' },
        ];
        this.empresaOptions$ = this.empresaService.findAll();
    }

    abrirModalVinculo(funcionario: Funcionario): void {
        this.funcionarioEmpresaForm = new FuncionarioEmpresa(funcionario);
    }

    vincularEmpresa(): void {
        const { funcionario, empresa } = this.funcionarioEmpresaForm;
        if (funcionario && empresa) {
            this.service
                .vincularEmpresa(funcionario.id, empresa.id)
                .subscribe(updated => {
                    if (updated) {

                    }
                });
        }
    }

    resetFilter(): void {
        this.filter = new FuncionarioFiltro();
    }

    resetFuncionarioEmpresaForm(): void {
        this.funcionarioEmpresaForm = new FuncionarioEmpresa();
    }
}
