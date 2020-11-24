import { Router } from '@angular/router';
import { Injector, OnInit } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { BaseService } from '../service/base.service';

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
        this.service.deleteById(id).subscribe( () => {
            // Swal.fire('Ok', 'Excluído com sucesso', 'success');
        });
    }

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
