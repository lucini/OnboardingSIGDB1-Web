import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FuncionarioService } from '@page/funcionario/funcionario.service';
import { BaseFormComponent } from '@shared/base-form.component';
import { ModalComponent } from '@shared/component/modal/modal.component';
import { Cargo } from '@shared/model/cargo';
import { SigError } from '@shared/model/error';
import { FuncionarioCargo } from '@shared/model/funcionario-cargo';
import { Observable } from 'rxjs/observable';
import swal from 'sweetalert2/dist/sweetalert2.min.js';

import { CargoService } from './../../../cargo/cargo.service';


@Component({
    selector: 'app-funcionario-cargo',
    templateUrl: 'funcionario-cargo.component.html',
})

export class FuncionarioCargoComponent extends BaseFormComponent implements OnInit {

    @Input() formObject = new FuncionarioCargo();
    @Output() saveVinculo = new EventEmitter<Cargo>();
    @Output() reset = new EventEmitter<FuncionarioCargo>();

    @ViewChild('modalCargo') modal: ModalComponent;

    cargoOptions$: Observable<Cargo[]>;

    constructor(private funcionarioService: FuncionarioService,
        private cargoService: CargoService) {
        super();
    }

    ngOnInit(): void {
        this.cargoOptions$ = this.cargoService.findAll();
    }

    vincularCargo(): void {
        const { funcionario, cargo } = this.formObject;
        if (funcionario && cargo) {
            this.funcionarioService
                .vincularCargo(funcionario.id, cargo.id)
                .subscribe(
                    updated => {
                        if (updated) {
                            swal.fire('Ok', 'Cargo vinculado com sucesso.', 'success').then(() => {
                                this.saveVinculo.emit(cargo);
                                this.resetFuncionarioCargoForm();
                                this.modal.close();
                            });
                        }
                    },
                    (error: SigError) => this.showError(error)
                );
        }
    }

    resetFuncionarioCargoForm(): void {
        this.formObject = new FuncionarioCargo();
        this.reset.emit(this.formObject);
    }
}
