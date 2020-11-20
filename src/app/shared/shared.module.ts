import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './component/card.component';
import { FormFeedbackComponent } from './component/form-feedback.component';


@NgModule({
    imports: [CommonModule],
    exports: [CardComponent, FormFeedbackComponent,],
    declarations: [CardComponent, FormFeedbackComponent],
    providers: [],
})
export class SharedModule { }
