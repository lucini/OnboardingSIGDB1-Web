import { CpfPipe } from './../pipe/cpf.pipe';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
import { DateHelper } from '../helper/date.helper';

export abstract class BaseService<T> {

    constructor(protected http: HttpClient, protected endpoint: string) {
    }

    protected getUrl(): string {
        return `${environment.api_url}${this.endpoint}`;
    }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.getUrl()}`);
    }

    findById(id: number): Observable<T> {
        return this.http.get<T>(`${this.getUrl()}/${id}`);
    }

    search(): Observable<T[]> {
        return of([]);
    }

    save(model: T): Observable<T> {
        this.prepare(model);
        const id = model['id'];
        // Se ouver id é atualizacao, mandamos um PUT
        if (id) {
            return this.http.put<T>(`${this.getUrl()}/${id}`, model);
        }
        // Não mandar o id pro backend quando é um novo registro
        delete model['id'];
        return this.http.post<T>(this.getUrl(), model);
    }

    deleteById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.getUrl()}/${id}`);
    }

    private prepare(model: T): void {
        Object.keys(model).forEach(key => {

            // Mandar data string pra api
            if (model[key]['formatted']) {
                model[key] = model[key]['formatted'];
            }

            // Não manda os null para API
            if (model[key] === null) {
                delete model[key];
            }

        });
    }
}
