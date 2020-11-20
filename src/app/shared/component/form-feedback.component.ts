import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
    selector: 'app-form-feedback',
    templateUrl: 'form-feedback.component.html',
    animations: [
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void <=> *', animate(500)),
        ]),
    ]
})

export class FormFeedbackComponent implements OnInit {

    @Input() formGroup: FormGroup;
    @Input() field: string;
    @Input() isValid = true;

    constructor() { }

    ngOnInit() {
    }
}