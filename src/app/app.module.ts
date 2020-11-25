import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CargoModule } from './page/cargo/cargo.module';
import { EmpresaModule } from './page/empresa/empresa.module';
import { FuncionarioModule } from './page/funcionario/funcionario.module';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CoreModule,
    CargoModule,
    EmpresaModule,
    FuncionarioModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
