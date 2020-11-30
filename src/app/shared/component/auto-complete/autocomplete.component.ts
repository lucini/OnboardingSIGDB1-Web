import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';

@Component({
    selector: 'app-autocomplete',
    templateUrl: 'autocomplete.component.html',
})

export class AutocompleteComponent implements OnInit {

    @Input() suggestions: Observable<any[]>;
    @Input() field = 'id';
    @Input() inputId = 'id';
    @Input() value = null;
    @Output() valueChange = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void { }


    update(value: any): void {
        this.suggestions
        .pipe(
            throttleTime(300),
            distinctUntilChanged()
        )
        .subscribe((values: any[]) => {
            const item = values.find(i => i[this.field] === value);
            this.valueChange.emit(item);
        });
    }
}
