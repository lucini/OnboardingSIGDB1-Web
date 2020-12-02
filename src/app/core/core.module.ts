import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { LoaderComponent } from './component/loader.component';
import { NavbarComponent } from './component/navbar.component';
import { LoaderService } from './service/loader.service';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
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
