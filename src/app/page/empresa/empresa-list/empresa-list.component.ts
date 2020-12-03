import { Component, Injector, ViewChild } from '@angular/core';
import { CrudListComponent } from '@shared/component/crud-list.component';
import { Empresa } from '@shared/model/empresa';
import { EmpresaFiltro } from '@shared/model/empresa-filtro';
import { NgxMyDatePickerDirective } from 'ngx-mydatepicker';

import { EmpresaService } from '../empresa.service';


@Component({
    selector: 'app-empresa-list',
    templateUrl: 'empresa-list.component.html',
})

export class EmpresaListComponent extends CrudListComponent<Empresa, EmpresaFiltro>  {

    @ViewChild('dpInicial') dpInicial: NgxMyDatePickerDirective;
    @ViewChild('dpFinal') dpFinal: NgxMyDatePickerDirective;

    constructor(protected service: EmpresaService,
        protected injector: Injector) {
        super(service, injector, 'empresa');
    }

    resetFilter(): void {
        this.filter = new EmpresaFiltro();
        this.dpInicial.clearDate();
        this.dpFinal.clearDate();
    }
}
