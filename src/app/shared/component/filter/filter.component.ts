import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: 'filter.component.html',
})

export class FilterComponent implements OnInit {

    @Output() filter = new EventEmitter<void>();
    @Output() clear = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void { }
}
