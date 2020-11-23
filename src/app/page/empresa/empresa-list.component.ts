import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudListComponent } from '../../shared/component/crud-list.component';
import { Empresa } from '../../shared/model/empresa';
import { EmpresaService } from './empresa.service';

@Component({
    selector: 'app-empresa-list',
    templateUrl: 'empresa-list.component.html',
})

export class EmpresaListComponent extends CrudListComponent<Empresa>  {

    constructor(protected service: EmpresaService,
        private router: Router) {
        super(service);
    }

    novo(): void {
        this.router.navigate(['/empresa/form']);
    }

    editar(id: number): void {
        this.router.navigate(['/empresa/form', id]);
    }
}
