import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '@shared/model/funcionario';
import { BaseService } from '@shared/service/base.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FuncionarioService extends BaseService<Funcionario> {
    constructor(protected http: HttpClient) {
        super(http, 'funcionarios');
    }

    vincularEmpresa(id: number, empresaId: number): Observable<boolean> {
        return this.http.put<boolean>(`${this.getUrl()}/${id}/vincularempresa/${empresaId}`, null);
    }

    vincularCargo(id: number, cargoId: number): Observable<boolean> {
        return this.http.put<boolean>(`${this.getUrl()}/${id}/atribuircargo/${cargoId}`, null);
    }
}
