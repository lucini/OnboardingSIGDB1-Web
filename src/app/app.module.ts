import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { CargoModule } from './page/cargo/cargo.module';
import { NavbarComponent } from './core/component/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CargoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
