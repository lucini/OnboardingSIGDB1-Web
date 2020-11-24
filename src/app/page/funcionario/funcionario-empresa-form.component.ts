import { Component, Injector, Input } from '@angular/core';
import { CrudFormComponent } from '@app/shared/component/crud-form.component';
import { FuncionarioEmpresa } from '@app/shared/model/funcionario-empresa';
import { BaseService } from '@app/shared/service/base.service';


@Component({
    selector: 'app-funcionario-empresa',
    templateUrl: './funcionario-empresa-form.component.html',
})

export class FuncionarioEmpresaFormComponent extends CrudFormComponent<FuncionarioEmpresa> {

    @Input() objeto: FuncionarioEmpresa;

    constructor(protected service: BaseService<FuncionarioEmpresa>, protected injector: Injector) {
        super(service, injector);
    }

    initForm(): void {

    }
}
