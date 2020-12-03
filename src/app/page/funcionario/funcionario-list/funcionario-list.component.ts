import { Empresa } from './../../../shared/model/empresa';
import { ChangeDetectorRef, Component, Injector, ViewChild } from '@angular/core';
import { FuncionarioEmpresa } from '@app/shared/model/funcionario-empresa';
import { CrudListComponent } from '@shared/component/crud-list.component';
import { Cargo } from '@shared/model/cargo';
import { Funcionario } from '@shared/model/funcionario';
import { FuncionarioCargo } from '@shared/model/funcionario-cargo';
import { FuncionarioFiltro } from '@shared/model/funcionario-filtro';
import { NgxMyDatePickerDirective } from 'ngx-mydatepicker';


import { FuncionarioService } from '../funcionario.service';

@Component({
    selector: 'app-funcionario-list',
    templateUrl: 'funcionario-list.component.html',
})

export class FuncionarioListComponent extends CrudListComponent<Funcionario, FuncionarioFiltro>  {

    @ViewChild('dpInicial') dpInicial: NgxMyDatePickerDirective;
    @ViewChild('dpFinal') dpFinal: NgxMyDatePickerDirective;

    funcionarioEmpresaForm = new FuncionarioEmpresa();
    funcionarioCargoForm = new FuncionarioCargo();

    constructor(protected service: FuncionarioService,
        protected injector: Injector,
        private ref: ChangeDetectorRef) {
        super(service, injector, 'funcionario');
        this.actions = [
            {
                title: 'Vincular Empresa',
                modal: true,
                targetModal: 'vincular-empresa',
                click: funcionario => this.funcionarioEmpresaForm = new FuncionarioEmpresa(funcionario),
            },
            {
                title: 'Vincular Cargo',
                modal: true,
                targetModal: 'vincular-cargo',
                click: funcionario => this.funcionarioCargoForm = new FuncionarioCargo(funcionario),
            },
        ];
    }

    refreshCargoList(cargo: Cargo): void {
        const { funcionario } = this.funcionarioCargoForm;
        // Atualizar somente lista em memória
        const index = this.result.lista.findIndex(item => item.id === funcionario.id);
        this.result.lista[index].cargo = cargo.descricao;
        this.ref.detectChanges();
    }

    refreshEmpresaList(empresa: Empresa): void {
        const { funcionario } = this.funcionarioEmpresaForm;
        // Atualizar somente lista em memória
        const index = this.result.lista.findIndex(item => item.id === funcionario.id);
        this.result.lista[index].empresa = empresa.nome;
        this.ref.detectChanges();
    }

    resetFilter(): void {
        this.filter = new FuncionarioFiltro();
        this.dpInicial.clearDate();
        this.dpFinal.clearDate();
    }
}
