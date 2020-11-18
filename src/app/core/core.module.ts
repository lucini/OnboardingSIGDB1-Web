import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './component/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    exports: [NavbarComponent, AppRoutingModule],
    declarations: [NavbarComponent],
    providers: [],
})
export class CoreModule { }
