import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: 'filter.component.html',
})

export class FilterComponent implements OnInit {

    @Output() filter = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void { }

    filterList(): void {
        this.filter.emit();
    }
}
