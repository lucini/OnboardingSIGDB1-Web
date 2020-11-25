import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs/observable/of';

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
        const id = model['id'];
        if (id) {
            return this.http.put<T>(`${this.getUrl()}/${id}`, model);
        }
        // Não mandar o id pro backend
        delete model['id'];
        return this.http.post<T>(this.getUrl(), model);
    }

    deleteById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.getUrl()}/${id}`);
    }
}
