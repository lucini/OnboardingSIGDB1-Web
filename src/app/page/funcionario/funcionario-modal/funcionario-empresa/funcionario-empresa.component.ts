import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BaseFormComponent } from '@shared/base-form.component';
import { ModalComponent } from '@shared/component/modal/modal.component';
import { Empresa } from '@shared/model/empresa';
import { SigError } from '@shared/model/error';
import { FuncionarioEmpresa } from '@shared/model/funcionario-empresa';
import { Observable } from 'rxjs/observable';
import swal from 'sweetalert2/dist/sweetalert2.min.js';

import { EmpresaService } from './../../../empresa/empresa.service';
import { FuncionarioService } from './../../funcionario.service';


@Component({
    selector: 'app-funcinario-empresa',
    templateUrl: 'funcionario-empresa.component.html',
})

export class FuncionarioEmpresaComponent extends BaseFormComponent implements OnInit {

    @ViewChild('modalEmpresa') modal: ModalComponent;
    @Input() formObject = new FuncionarioEmpresa();
    @Output() saveVinculo = new EventEmitter<Empresa>();
    @Output() reset = new EventEmitter<FuncionarioEmpresa>();

    empresaOptions$: Observable<Empresa[]>;


    constructor(private funcionarioService: FuncionarioService,
        private empresaService: EmpresaService) {
        super();
    }

    ngOnInit(): void {
        this.empresaOptions$ = this.empresaService.findAll();
    }

    resetFuncionarioEmpresaForm(): void {
        this.formObject = new FuncionarioEmpresa();
        this.reset.emit(this.formObject);
    }

    vincularEmpresa(): void {
        const { funcionario, empresa } = this.formObject;
        if (funcionario && empresa) {
            this.funcionarioService
                .vincularEmpresa(funcionario.id, empresa.id)
                .subscribe(
                    updated => {
                        if (updated) {
                            swal.fire('Ok', 'Empresa vinculada com sucesso.', 'success').then(() => {
                                this.saveVinculo.emit(empresa);
                                this.modal.close();
                                this.resetFuncionarioEmpresaForm();
                            });
                        }
                    },
                    (error: SigError) => this.showError(error)
                );
        }
    }

}
