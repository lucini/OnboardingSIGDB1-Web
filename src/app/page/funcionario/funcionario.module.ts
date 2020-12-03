import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { SharedModule } from '../../shared/shared.module';

import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioCargoComponent } from './funcionario-modal/funcionario-cargo/funcionario-cargo.component';
import { FuncionarioEmpresaComponent } from './funcionario-modal/funcionario-empresa/funcionario-empresa.component';
import { FuncionarioService } from './funcionario.service';


@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        NgxMyDatePickerModule.forRoot(),
    ],
    exports: [],
    declarations: [
        FuncionarioListComponent,
        FuncionarioFormComponent,
        FuncionarioCargoComponent,
        FuncionarioEmpresaComponent,
    ],
    providers: [FuncionarioService],
})
export class FuncionarioModule { }
