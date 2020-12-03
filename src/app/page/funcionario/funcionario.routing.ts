import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';


export const funcionarioRouting = [
    { path: 'funcionario', component: FuncionarioListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'funcionario/form',
        children: [
            { path: '', component: FuncionarioFormComponent, data: { animation: 'fadeInOut' } },
            { path: ':id', component: FuncionarioFormComponent, data: { animation: 'fadeInOut' } },
        ],
    },
];
