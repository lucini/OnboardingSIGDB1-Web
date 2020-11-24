import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';
/**
 * Simulando comunicação com a API
 */
export abstract class BaseService<T> {
    private _lista: T[] = [];

    constructor(lista: T[]) {
        this._lista = lista;
    }

    findAll(): Observable<T[]> {
        return of(this._lista);
    }

    findById(id: number): Observable<T> {
        const item = this._lista.find(v => v['id'] === id);
        return of(item);
    }

    save(model: T): Observable<T> {
        const id = model['id'];
        if (id) {
            const index = this._lista.findIndex(v => v['id'] === id);
            this._lista[index] = model;
        } else {
            const lastId = this._lista.length > 0 ? this._lista[this._lista.length - 1]['id'] : 0;
            model['id'] = lastId + 1;
            this._lista.push(model);
        }

        return of(model);
    }

    deleteById(id: number): Observable<void> {
        const index = this._lista.findIndex(v => v['id'] === id);
        return of(null).pipe(tap(() => this._lista.splice(index, 1)));
    }
}
