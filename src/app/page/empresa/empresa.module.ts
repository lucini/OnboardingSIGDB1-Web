import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EmpresaFormComponent } from './empresa-form.component';
import { EmpresaListComponent } from './empresa-list.component';
import { EmpresaService } from './empresa.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        EmpresaListComponent,
        EmpresaFormComponent,
    ],
    providers: [EmpresaService],
})
export class EmpresaModule { }
