import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CargoFormComponent } from './cargo.form.component';
import { CargoListComponent } from './cargo.list.component';

@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [CargoListComponent, CargoFormComponent],
    providers: [],
})
export class CargoModule { }
