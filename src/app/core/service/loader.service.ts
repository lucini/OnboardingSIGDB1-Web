import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';

@Injectable()
export class LoaderService implements OnDestroy {

    private loadingSubject = new BehaviorSubject<boolean>(false);

    constructor() { }

    loading(loading = true): void {
        this.loadingSubject.next(loading);
    }

    listenLoad(): Observable<boolean> {
       return this.loadingSubject.asObservable().pipe(delay(1));
    }

    ngOnDestroy(): void {
        this.loadingSubject.unsubscribe();
    }
}
