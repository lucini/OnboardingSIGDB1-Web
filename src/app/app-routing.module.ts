import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cargoRouting } from '@page/cargo/cargo.routing';
import { empresaRouting } from '@page/empresa/empresa.routing';
import { funcionarioRouting } from '@page/funcionario/funcionario.routing';

import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    ...cargoRouting,
    ...empresaRouting,
    ...funcionarioRouting,
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
