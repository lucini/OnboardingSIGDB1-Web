import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargoFormComponent } from './page/cargo/cargo-form.component';
import { CargoListComponent } from './page/cargo/cargo-list.component';
import { EmpresaFormComponent } from './page/empresa/empresa-form.component';
import { EmpresaListComponent } from './page/empresa/empresa-list.component';
import { FuncionarioEmpresaFormComponent } from './page/funcionario/funcionario-empresa-form.component';
import { FuncionarioFormComponent } from './page/funcionario/funcionario-form.component';
import { FuncionarioListComponent } from './page/funcionario/funcionario-list.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'empresa', component: EmpresaListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'empresa/form',
        children: [
            { path: '', component: EmpresaFormComponent },
            { path: ':id', component: EmpresaFormComponent },
        ],
    },
    { path: 'funcionario', component: FuncionarioListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'funcionario/form',
        children: [
            { path: '', component: FuncionarioFormComponent },
            { path: ':id', component: FuncionarioFormComponent },
        ],
    },
    { path: 'funcionario-empresa', component: FuncionarioEmpresaFormComponent, data: { animation: 'fadeInOut' } },
    { path: 'cargo', component: CargoListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'cargo/form',
        children: [
            { path: '', component: CargoFormComponent },
            { path: ':id', component: CargoFormComponent },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
