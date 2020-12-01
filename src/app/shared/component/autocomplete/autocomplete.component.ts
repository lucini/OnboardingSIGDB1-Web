import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-autocomplete',
    templateUrl: 'autocomplete.component.html',
})

export class AutocompleteComponent implements OnInit {

    @Input() suggestions: Observable<any[]>;
    @Input() field = 'id';
    @Input() inputId = 'autocomplete-id';
    @Input() value = null;
    @Output() valueChange = new EventEmitter<any>();

    suggestionsArray: any[];

    constructor() { }

    ngOnInit(): void {
        this.suggestions
            .subscribe((values: any[]) => this.suggestionsArray = values);
    }

    update(value: any): void {
        const item = this.suggestionsArray.find(i => i[this.field] === value);
        this.valueChange.emit(item);
    }
}
