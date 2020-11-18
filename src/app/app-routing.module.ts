import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { CargoListComponent } from './page/cargo/cargo.list.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cargo', component: CargoListComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
