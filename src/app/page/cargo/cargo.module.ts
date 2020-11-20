import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CargoFormComponent } from './cargo-form.component';
import { CargoListComponent } from './cargo-list.component';
import { CargoService } from './cargo.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        CargoListComponent,
        CargoFormComponent,
    ],
    providers: [CargoService],
})
export class CargoModule { }