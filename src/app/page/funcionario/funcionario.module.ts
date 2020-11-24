import { FuncionarioEmpresaFormComponent } from './funcionario-empresa-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FuncionarioFormComponent } from './funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list.component';
import { FuncionarioService } from './funcionario.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
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
