import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutocompleteComponent } from './component/auto-complete/autocomplete.component';
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
        FormsModule,
    ],
    declarations: [
        CardComponent,
        FilterComponent,
        ModalComponent,
        FormFeedbackComponent,
        AutocompleteComponent,
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
        AutocompleteComponent,
        CpfPipe,
        CnpjPipe,
        ExplodePipe,
    ],
    providers: [],
})
export class SharedModule { }
