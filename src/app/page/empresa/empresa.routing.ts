import { Routes } from '@angular/router';

import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';

export const empresaRouting: Routes = [
    { path: 'empresa', component: EmpresaListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'empresa/form',
        children: [
            { path: '', component: EmpresaFormComponent, data: { animation: 'fadeInOut' } },
            { path: ':id', component: EmpresaFormComponent, data: { animation: 'fadeInOut' } },
        ],
    },
];
