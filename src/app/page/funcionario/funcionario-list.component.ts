import { ChangeDetectorRef, Component, Injector, ViewChild } from '@angular/core';
import { FuncionarioEmpresa } from '@app/shared/model/funcionario-empresa';
import { CrudListComponent } from '@shared/component/crud-list.component';
import { ModalComponent } from '@shared/component/modal/modal.component';
import { Cargo } from '@shared/model/cargo';
import { Empresa } from '@shared/model/empresa';
import { Funcionario } from '@shared/model/funcionario';
import { FuncionarioCargo } from '@shared/model/funcionario-cargo';
import { FuncionarioFiltro } from '@shared/model/funcionario-filtro';
import { Observable } from 'rxjs/Observable';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { EmpresaService } from '../empresa/empresa.service';

import { CargoService } from './../cargo/cargo.service';
import { FuncionarioService } from './funcionario.service';

@Component({
    selector: 'app-funcionario-list',
    templateUrl: 'funcionario-list.component.html',
})

export class FuncionarioListComponent extends CrudListComponent<Funcionario, FuncionarioFiltro>  {

    @ViewChild('modalEmpresa') modalEmpresa: ModalComponent;
    @ViewChild('modalCargo') modalCargo: ModalComponent;

    funcionarioEmpresaForm = new FuncionarioEmpresa();
    funcionarioCargoForm = new FuncionarioCargo();
    empresaOptions$: Observable<Empresa[]>;
    cargoOptions$: Observable<Cargo[]>;

    constructor(protected service: FuncionarioService,
        protected injector: Injector,
        private ref: ChangeDetectorRef,
        private empresaService: EmpresaService,
        private cargoService: CargoService) {
        super(service, injector, 'funcionario');
        this.actions = [
            {
                title: 'Vincular Empresa',
                modal: true,
                targetModal: 'vincular-empresa',
                click: funcionario => this.abrirModalVinculoEmpresa(funcionario),
            },
            {
                title: 'Vincular Cargo',
                modal: true,
                targetModal: 'vincular-cargo',
                click: cargo => this.abrirModalVinculoCargo(cargo),
            },
        ];
        this.empresaOptions$ = this.empresaService.findAll();
        this.cargoOptions$ = this.cargoService.findAll();
    }

    abrirModalVinculoEmpresa(funcionario: Funcionario): void {
        this.funcionarioEmpresaForm = new FuncionarioEmpresa(funcionario);
    }

    abrirModalVinculoCargo(funcionario: Funcionario): void {
        this.funcionarioCargoForm = new FuncionarioCargo(funcionario);
    }

    vincularEmpresa(): void {
        const { funcionario, empresa } = this.funcionarioEmpresaForm;
        if (funcionario && empresa) {
            this.service
                .vincularEmpresa(funcionario.id, empresa.id)
                .subscribe(updated => {
                    if (updated) {
                        Swal.fire('Ok', 'Empresa vinculada com sucesso.', 'success').then(() => {
                            // Atualizar somente lista em memória
                            const index = this.result.lista.findIndex(item => item.id === funcionario.id);
                            this.result.lista[index].empresa = empresa.nome;
                            this.ref.detectChanges();
                            this.modalEmpresa.close();
                        });
                    }
                });
        }
    }

    vincularCargo(): void {
        const { funcionario, cargo } = this.funcionarioCargoForm;
        if (funcionario && cargo) {
            this.service
                .vincularCargo(funcionario.id, cargo.id)
                .subscribe(updated => {
                    if (updated) {
                        Swal.fire('Ok', 'Cargo vinculado com sucesso.', 'success').then(() => {
                            // Atualizar somente lista em memória
                            const index = this.result.lista.findIndex(item => item.id === funcionario.id);
                            this.result.lista[index].cargo = cargo.descricao;
                            this.ref.detectChanges();
                            this.modalCargo.close();
                        });
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

    resetFuncionarioCargoForm(): void {
        this.funcionarioEmpresaForm = new FuncionarioEmpresa();
    }
}
