import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class MockActivatedRoute {
    readonly paramMap: Observable<Map<string, any>> =  of(new Map<string, any>().set('id', 1));
}
