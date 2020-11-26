import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CardComponent } from './component/card/card.component';
import { FilterComponent } from './component/filter/filter.component';
import { FormFeedbackComponent } from './component/form-feedback/form-feedback.component';
import { CnpjPipe } from './pipe/cnpj.pipe';
import { CpfPipe } from './pipe/cpf.pipe';
import { ExplodePipe } from './pipe/explode.pipe';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        HttpClientModule,
        CardComponent,
        FilterComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
        ExplodePipe,
    ],
    declarations: [
        CardComponent,
        FilterComponent,
        FormFeedbackComponent,
        CpfPipe,
        CnpjPipe,
        ExplodePipe,
    ],
    providers: [],
})
export class SharedModule { }
