import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
