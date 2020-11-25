import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { SharedModule } from '../../shared/shared.module';

import { FuncionarioEmpresaFormComponent } from './funcionario-empresa-form.component';
import { FuncionarioFormComponent } from './funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list.component';
import { FuncionarioService } from './funcionario.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        NgxMyDatePickerModule.forRoot(),
    ],
    exports: [],
    declarations: [
        FuncionarioListComponent,
        FuncionarioFormComponent,
        FuncionarioEmpresaFormComponent,
    ],
    providers: [FuncionarioService],
})
export class FuncionarioModule { }
