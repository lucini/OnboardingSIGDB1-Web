import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './component/card/card.component';
import { FormFeedbackComponent } from './component/form-feedback/form-feedback.component';
import { CnpjPipe } from './pipe/cnpj.pipe';
import { CpfPipe } from './pipe/cpf.pipe';
import { ExplodePipe } from './pipe/explode.pipe';


@NgModule({
    imports: [CommonModule],
    exports: [
        CardComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
        ExplodePipe,
    ],
    declarations: [
        CardComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
        ExplodePipe,
    ],
    providers: [],
})
export class SharedModule { }
