import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Funcionario } from '@shared/model/funcionario';
import { environment } from 'environments/environment';

import { FuncionarioService } from './funcionario.service';

describe('FuncionarioService', () => {
    let funcionario: Funcionario;
    let service: FuncionarioService;
    let httpMock: HttpTestingController;
    let httpClient: HttpClient;
    const API_URL = `${environment.api_url}funcionarios`;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [FuncionarioService],
        });

        service = TestBed.get(FuncionarioService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.get(HttpClient);

        funcionario = {
            id: 1,
            nome: 'Fulano',
            cpf: '88719127057',
            cargo: 'Programador',
            empresa: 'Db1',
        };
    });


    it('should create Service', () => {
        expect(service).toBeTruthy();
    });

    it('#vincularEmpresa should call http PUT kethod for the given route', () => {
        service.vincularEmpresa(1, 1).subscribe(val => {
            expect(val).toBe(true);
        });

        const url = `${API_URL}/1/vincularempresa/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('PUT');

        httpMock.verify();
    });

    it('#vincularCargo should call http PUT kethod for the given route', () => {
        service.vincularCargo(1, 1).subscribe(val => {
            expect(val).toBe(true);
        });

        const url = `${API_URL}/1/atribuircargo/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('PUT');

        httpMock.verify();
    });

    it('#findAll should call http GET kethod for the given route', () => {
        service.findAll().subscribe(val => {
            expect(val).toBe([funcionario]);
        });

        const url = `${API_URL}`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#findAllWithFilter should call http GET kethod for the given route', () => {
        service.findAllWithFilter({ nome: 'Fulano' }).subscribe(val => {
            expect(val).toBe({ lista: [funcionario], total: 1 });
        });

        const url = `${API_URL}/pesquisar?nome=Fulano`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#findById should call http GET kethod for the given route', () => {
        service.findById(1).subscribe(val => {
            expect(val).toBe(funcionario);
        });

        const url = `${API_URL}/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#save with Id should call http PUT kethod for the given route', () => {
        service.save(funcionario).subscribe(val => {
            expect(val).toBe(funcionario);
        });

        const url = `${API_URL}/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('PUT');

        httpMock.verify();
    });

    it('#save without Id should call http POST kethod for the given route', () => {
        delete funcionario.id;
        service.save(funcionario).subscribe(val => {
            expect(val).toBe(funcionario);
        });

        const url = `${API_URL}`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('POST');

        httpMock.verify();
    });

    it('#deleteById should call http DELETE kethod for the given route', () => {
        service.deleteById(1).subscribe(val => {
            expect(val).toHaveBeenCalled();
        });

        const url = `${API_URL}/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('DELETE');

        httpMock.verify();
    });
});

