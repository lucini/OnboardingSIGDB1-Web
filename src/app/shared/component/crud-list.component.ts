import { Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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
        this.service.findAllWithFilter(this.filter).subscribe(v => this.result = v);
    }

    resetFilter(): void {
    }

    remover(id: number): void {
        swal.fire({
            title: 'Você tem certeza?',
            text: 'Essa operação é irreversível.',
            icon: 'warning',
        }).then(isConfirm => {
            if (isConfirm) {
                this.service.deleteById(id).subscribe(() => {
                    swal.fire('Ok', 'Excluído com sucesso', 'success').then(() => {
                        const index = this.result.lista.findIndex(val => val['id'] === id);
                        if (index > -1) {
                            this.result.lista.splice(index, 1);
                            this.result.total--;
                        }
                    });
                });
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
}
