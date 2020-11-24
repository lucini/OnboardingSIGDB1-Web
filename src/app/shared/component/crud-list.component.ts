import { OnInit } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { BaseService } from '../service/base.service';

export abstract class CrudListComponent<T> implements OnInit {
    list: T[];
    actions: MenuItem[] = [];

    constructor(protected service: BaseService<T>) {
    }

    abstract novo(): void;
    abstract editar(id: number): void;

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
}
