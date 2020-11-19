import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { CargoListComponent } from './page/cargo/cargo-list.component';
import { CargoFormComponent } from './page/cargo/cargo-form.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cargo', component: CargoListComponent},
    {path: 'cargo/form', component: CargoFormComponent},
    {path: 'cargo/form/:id', component: CargoFormComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
