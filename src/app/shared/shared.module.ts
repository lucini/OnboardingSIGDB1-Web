import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CardComponent } from './component/card/card.component';
import { FilterComponent } from './component/filter/filter.component';
import { FormFeedbackComponent } from './component/form-feedback/form-feedback.component';
import { ModalComponent } from './component/modal/modal.component';
import { CnpjPipe } from './pipe/cnpj.pipe';
import { CpfPipe } from './pipe/cpf.pipe';
import { ExplodePipe } from './pipe/explode.pipe';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    declarations: [
        CardComponent,
        FilterComponent,
        ModalComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
        ExplodePipe,
    ],
    exports: [
        HttpClientModule,
        CardComponent,
        FilterComponent,
        ModalComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
        ExplodePipe,
    ],
    providers: [],
})
export class SharedModule { }
