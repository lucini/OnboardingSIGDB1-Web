import { Router } from '@angular/router';
import { Injector, OnInit } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { BaseService } from '../service/base.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export abstract class CrudListComponent<T> implements OnInit {
    list: T[];
    actions: MenuItem[] = [];
    protected router: Router;

    constructor(protected service: BaseService<T>,
        protected injector: Injector,
        protected endpoint = '') {
        this.router = this.injector.get(Router);
    }

    ngOnInit(): void {
        this.loadList();
    }

    loadList(): void {
        this.service.findAll().subscribe(v => {
            this.list = v;
        });
    }

    remover(id: number): void {
        Swal.fire({
            title: 'Você tem certeza?',
            text: 'Essa operação é irreversível.',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(isConfirm => {
            if (isConfirm) {
                this.service.deleteById(id).subscribe(() => {
                    Swal.fire('Ok', 'Excluído com sucesso', 'success');
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
        this.router.navigate([`/${this.endpoint}/form`]);
    }

    editar(id: number): void {
        this.router.navigate([`/${this.endpoint}/form`, id]);
    }
}
