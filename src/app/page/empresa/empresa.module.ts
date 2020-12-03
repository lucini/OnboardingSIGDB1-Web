import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaService } from './empresa.service';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        NgxMyDatePickerModule.forRoot(),
    ],
    exports: [],
    declarations: [
        EmpresaListComponent,
        EmpresaFormComponent,
    ],
    providers: [EmpresaService],
})
export class EmpresaModule { }
