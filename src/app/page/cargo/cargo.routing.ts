import { CargoFormComponent } from './cargo-form/cargo-form.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';

export const cargoRouting = [
    { path: 'cargo', component: CargoListComponent, data: { animation: 'fadeInOut' } },
    {
        path: 'cargo/form',
        children: [
            { path: '', component: CargoFormComponent, data: { animation: 'fadeInOut' } },
            { path: ':id', component: CargoFormComponent, data: { animation: 'fadeInOut' } },
        ],
    },
];
