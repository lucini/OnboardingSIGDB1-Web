import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { LoaderComponent } from './component/loader.component';
import { NavbarComponent } from './component/navbar.component';
import { LoaderService } from './service/loader.service';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    exports: [
        LoaderComponent,
        NavbarComponent,
        AppRoutingModule,
    ],
    declarations: [
        LoaderComponent,
        NavbarComponent,
    ],
    providers: [
        LoaderService,
    ],
})
export class CoreModule { }
