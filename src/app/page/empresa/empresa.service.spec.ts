import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Empresa } from '@shared/model/empresa';
import { environment } from 'environments/environment';

import { EmpresaService } from './empresa.service';


describe('EmpresaService', () => {
    let empresa: Empresa;
    let service: EmpresaService;
    let httpMock: HttpTestingController;
    let httpClient: HttpClient;
    const API_URL = `${environment.api_url}empresas`;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [EmpresaService],
        });

        service = TestBed.get(EmpresaService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.get(HttpClient);

        empresa = {
            id: 1,
            nome: 'Empresa',
            cnpj: '85708652000138',
        };
    });


    it('should create Service', () => {
        expect(service).toBeTruthy();
    });


    it('#findAll should call http GET kethod for the given route', () => {
        service.findAll().subscribe(val => {
            expect(val).toBe([empresa]);
        });

        const url = `${API_URL}`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#findAllWithFilter should call http GET kethod for the given route', () => {
        service.findAllWithFilter({ nome: 'Empresa' }).subscribe(val => {
            expect(val).toBe({ lista: [empresa], total: 1 });
        });

        const url = `${API_URL}/pesquisar?nome=Empresa`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#findById should call http GET kethod for the given route', () => {
        service.findById(1).subscribe(val => {
            expect(val).toBe(empresa);
        });

        const url = `${API_URL}/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#save with Id should call http PUT kethod for the given route', () => {
        service.save(empresa).subscribe(val => {
            expect(val).toBe(empresa);
        });

        const url = `${API_URL}/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('PUT');

        httpMock.verify();
    });

    it('#save without Id should call http POST kethod for the given route', () => {
        delete empresa.id;
        service.save(empresa).subscribe(val => {
            expect(val).toBe(empresa);
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

