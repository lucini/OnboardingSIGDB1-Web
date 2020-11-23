import { fadeInOut } from './../animation/animation';
import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-feedback',
    templateUrl: 'form-feedback.component.html',
    animations: [
        fadeInOut
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
