import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class MockActivatedRoute {
    readonly paramMap: Observable<ParamMap> = of(null );
}
