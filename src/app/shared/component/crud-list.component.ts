import { BaseService } from "../service/base.service";

export abstract class CrudListComponent<T> {
    list: T[];

    constructor(protected service: BaseService<T>) {
    }

    loadList(): void {
        this.service.findAll().subscribe(v => this.list = v);
    }

    abstract novo(): void;
    abstract editar(id: number): void;
    remover(id: number): void {
        this.service.deleteById(id).subscribe();
    }
}