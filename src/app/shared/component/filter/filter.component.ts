import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: 'filter.component.html',
})

export class FilterComponent implements OnInit {

    onFilter = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void { }

    filterList(): void {
        this.onFilter.emit();
    }
}
