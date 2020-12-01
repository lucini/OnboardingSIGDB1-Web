import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
    @ViewChild('inputAuto') inputAuto: ElementRef;

    suggestionsArray: any[] = [];

    constructor() { }

    ngOnInit(): void {
        // Atributo Lis do HTML5 não faz bind nessa versão do Angular, por isso foi feito manualmente com js puro.
        this.inputAuto.nativeElement.setAttribute('list', 'dt_' + this.inputId);
        this.suggestions
            .subscribe((values: any[]) => this.suggestionsArray = values);
    }

    update(value: any): void {
        const item = this.suggestionsArray.find(i => i[this.field] === value);
        this.valueChange.emit(item);
    }
}
