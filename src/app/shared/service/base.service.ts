import { HttpClient, HttpParams } from '@angular/common/http';
import { DateHelper } from '@app/shared/helper/date.helper';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Result } from './../model/result';

/**
 * Métodos e propriedades comuns entre os services.
 */
export abstract class BaseService<T> {

    /**
     * @ignore
     */
    constructor(protected http: HttpClient, protected endpoint: string) {
    }

    /**
     * Retorna a url da API concatenada ao endpoint passado pelo serviço.
     * @returns {string} URL completa.
     */
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
        this.prepareToSend(filter);
        const params = new HttpParams({ fromObject: filter });
        return this.http.get<Result<T>>(`${this.getUrl()}/pesquisar`, { params });
    }

    complete(query?: string, field?: string): Observable<T[]> {
        const param = {};
        param[field] = query;
        return this.findAllWithFilter(param).pipe(map(val => val.lista));
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

    private prepareToSend(model: T): void {
        Object.keys(model).forEach(key => {
            // Mandar data string pra API
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
