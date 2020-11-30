import { Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigError } from '@shared/model/error';
import swal from 'sweetalert2/dist/sweetalert2.min.js';


import { DATE_PICKER_OPTION } from '../constant/constant';
import { MenuItem } from '../model/menu-item';
import { Result } from '../model/result';
import { BaseService } from '../service/base.service';



export abstract class CrudListComponent<T, Y> implements OnInit {
    result: Result<T>;
    filter: Y;
    actions: MenuItem[] = [];
    dpOptions = DATE_PICKER_OPTION;
    protected router: Router;

    constructor(protected service: BaseService<T>,
        protected injector: Injector,
        protected route = '') {
        this.router = this.injector.get(Router);
    }

    ngOnInit(): void {
        this.resetFilter();
        this.filterList();
    }

    filterList(): void {
        this.service.findAllWithFilter(this.filter)
            .subscribe(
                v => this.result = v,
                (error: SigError) => this.showError(error)
            );
    }

    resetFilter(): void {
    }

    remover(id: number): void {
        swal.fire({
            title: 'Você tem certeza que deseja excluir?',
            text: 'Essa operação é irreversível.',
            icon: 'warning',
            showDenyButton: true,
            denyButtonText: 'Não',
            confirmButtonText: 'Sim',
        }).then(action => {
            if (action.isConfirmed) {
                this.service.deleteById(id)
                    .subscribe(
                        () => {
                            swal.fire('Ok', 'Excluído com sucesso', 'success').then(() => {
                                const index = this.result.lista.findIndex(val => val['id'] === id);
                                if (index > -1) {
                                    this.result.lista.splice(index, 1);
                                    this.result.total--;
                                }
                            });
                        },
                        (error: SigError) => this.showError(error)
                    );
            }
        });
    }

    /**
     * Para indexar as listas, ganho de performance no ngFor
     * @param index index do item do array
     * @param item item do array
     */
    trackById(index: number, item: T): void {
        return item['id'];
    }

    novo(): void {
        this.router.navigate([`/${this.route}/form`]);
    }

    editar(id: number): void {
        this.router.navigate([`/${this.route}/form`, id]);
    }

    showError(sigError: SigError): void {
        const { error } = sigError;
        const errorList = `<ul>${error.map(e => `<li>${e}</li>`)}</ul>`;

        swal.fire('Atenção', errorList, 'warning');
    }
}
