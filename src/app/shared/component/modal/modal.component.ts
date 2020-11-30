import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
})

export class ModalComponent implements OnInit {

    @Input() modalId = 'modalId';
    @Input() title = '';
    @Output() saveClick = new EventEmitter<void>();
    @Output() closeClick = new EventEmitter<void>();

    @ViewChild('btnClose') btnFechar: ElementRef;

    constructor() { }

    ngOnInit(): void { }

    /**
     * Simular click no botão fechar da modal do BS.
     */
    close(): void {
        this.btnFechar.nativeElement.click();
    }
}
