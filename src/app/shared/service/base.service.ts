import { Observable } from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';

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

    save(model: T): Observable<T> {
        const id = model['id'];
        if (id) {
            return this.http.put<T>(`${this.getUrl()}/${id}`, model);
        }
        return this.http.post<T>(this.getUrl(), model);
        // return of(model);
    }

    deleteById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.getUrl()}/${id}`);
    }
}
