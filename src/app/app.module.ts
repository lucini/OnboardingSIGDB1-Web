import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CargoModule } from './page/cargo/cargo.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { EmpresaModule } from './page/empresa/empresa.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    EmpresaModule,
    CargoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
