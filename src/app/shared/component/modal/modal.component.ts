import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
})

export class ModalComponent implements OnInit {

    @Input() modalId = 'modalId';
    @Input() title = '';
    @Output() saveClick = new EventEmitter<void>();
    @Output() closeClick = new EventEmitter<void>();


    constructor() { }

    ngOnInit(): void { }

}
