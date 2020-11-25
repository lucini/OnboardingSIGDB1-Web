import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './component/navbar.component';
import { LoaderService } from './service/loader.service';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    exports: [
        NavbarComponent,
        AppRoutingModule,
    ],
    declarations: [
        NavbarComponent,
    ],
    providers: [
        LoaderService,
    ],
})
export class CoreModule { }
