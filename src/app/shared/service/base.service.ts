import { HttpClient } from '@angular/common/http';
import { DateHelper } from '@app/shared/helper/date.helper';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';

import { Result } from './../model/result';

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

    findAllWithFilter(filter?: any): Observable<Result<T>> {
        const query = this.mountQuery(filter);
        return this.http.get<Result<T>>(`${this.getUrl()}/pesquisar${query}`);
    }

    save(model: T): Observable<T> {
        this.prepareToSend(model);
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

    private mountQuery(filter: any): string {
        this.prepareToSend(filter);

        let query = '';

        Object.keys(filter).forEach((key, index) => {
            const parameter = `${key}=${filter[key]}`;
            if (index === 0) {
                query = `?` + parameter;
            } else {
                query = query + '&' + parameter;
            }
        });

        return query;
    }

    private prepareToSend(model: T): void {
        Object.keys(model).forEach(key => {
            // Mandar data string pra api
            if (model[key] && model[key]['formatted']) {
                model[key] = model[key]['formatted'];
            }

            // Não manda os null para API
            if (model[key] === null || model[key] === '') {
                delete model[key];
            }
        });
    }
}
