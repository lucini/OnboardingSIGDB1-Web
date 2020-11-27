import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargoFormComponent } from './page/cargo/cargo-form.component';
import { CargoListComponent } from './page/cargo/cargo-list.component';
import { EmpresaFormComponent } from './page/empresa/empresa-form.component';
import { EmpresaListComponent } from './page/empresa/empresa-list.component';
import { FuncionarioFormComponent } from './page/funcionario/funcionario-form.component';
import { FuncionarioListComponent } from './page/funcionario/funcionario-list.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'empresa', component: EmpresaListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'empresa/form',
        children: [
            { path: '', component: EmpresaFormComponent, data: { animation: 'fadeInOut' } },
            { path: ':id', component: EmpresaFormComponent, data: { animation: 'fadeInOut' } },
        ],
    },
    { path: 'funcionario', component: FuncionarioListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'funcionario/form',
        children: [
            { path: '', component: FuncionarioFormComponent, data: { animation: 'fadeInOut' } },
            { path: ':id', component: FuncionarioFormComponent, data: { animation: 'fadeInOut' } },
        ],
    },
    { path: 'cargo', component: CargoListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'cargo/form',
        children: [
            { path: '', component: CargoFormComponent, data: { animation: 'fadeInOut' } },
            { path: ':id', component: CargoFormComponent, data: { animation: 'fadeInOut' } },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
