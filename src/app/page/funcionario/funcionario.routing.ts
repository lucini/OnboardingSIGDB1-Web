import { Routes } from '@angular/router';

import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';


export const funcionarioRouting: Routes = [
    { path: 'funcionario', component: FuncionarioListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'funcionario/form',
        children: [
            { path: '', component: FuncionarioFormComponent, data: { animation: 'fadeInOut' } },
            { path: ':id', component: FuncionarioFormComponent, data: { animation: 'fadeInOut' } },
        ],
    },
];
