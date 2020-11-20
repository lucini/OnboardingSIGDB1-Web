import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './component/card.component';
import { FormFeedbackComponent } from './component/form-feedback.component';
import { CnpjPipe } from './pipe/cnpj.pipe';
import { CpfPipe } from './pipe/cpf.pipe';


@NgModule({
    imports: [CommonModule],
    exports: [
        CardComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
    ],
    declarations: [
        CardComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
    ],
    providers: [],
})
export class SharedModule { }
