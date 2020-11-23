import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { HomeComponent } from './page/home/home.component';
import { CargoListComponent } from './page/cargo/cargo-list.component';
import { CargoFormComponent } from './page/cargo/cargo-form.component';
import { EmpresaListComponent } from './page/empresa/empresa-list.component';
import { EmpresaFormComponent } from './page/empresa/empresa-form.component';
import { FuncionarioListComponent } from './page/funcionario/funcionario-list.component';
import { FuncionarioFormComponent } from './page/funcionario/funcionario-form.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'empresa', component: EmpresaListComponent, data: {animation: 'fadeInOut'}},
    {path: 'empresa/form', component: EmpresaFormComponent},
    {path: 'empresa/form/:id', component: EmpresaFormComponent},
    {path: 'funcionario', component: FuncionarioListComponent, data: {animation: 'fadeInOut'}},
    {path: 'funcionario/form', component: FuncionarioFormComponent},
    {path: 'funcionario/form/:id', component: FuncionarioFormComponent},
    {path: 'cargo', component: CargoListComponent, data: {animation: 'fadeInOut'}},
    {path: 'cargo/form', component: CargoFormComponent},
    {path: 'cargo/form/:id', component: CargoFormComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
