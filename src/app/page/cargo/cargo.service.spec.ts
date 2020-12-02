import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Cargo } from '@shared/model/cargo';
import { environment } from 'environments/environment';

import { CargoService } from './cargo.service';




describe('CargoService', () => {
    let objeto: Cargo;
    let service: CargoService;
    let httpMock: HttpTestingController;
    let httpClient: HttpClient;
    const API_URL = `${environment.api_url}cargos`;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CargoService],
        });

        service = TestBed.get(CargoService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.get(HttpClient);

        objeto = {
            id: 1,
            descricao: 'Cargo',
        };
    });


    it('should create Service', () => {
        expect(service).toBeTruthy();
    });


    it('#findAll should call http GET kethod for the given route', () => {
        service.findAll().subscribe(val => {
            expect(val).toBe([objeto]);
        });

        const url = `${API_URL}`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#findAllWithFilter should call http GET kethod for the given route', () => {
        service.findAllWithFilter({ descricao: 'Cargo' }).subscribe(val => {
            expect(val).toBe({ lista: [objeto], total: 1 });
        });

        const url = `${API_URL}/pesquisar?descricao=Cargo`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#findById should call http GET kethod for the given route', () => {
        service.findById(1).subscribe(val => {
            expect(val).toBe(objeto);
        });

        const url = `${API_URL}/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('GET');

        httpMock.verify();
    });

    it('#save with Id should call http PUT kethod for the given route', () => {
        service.save(objeto).subscribe(val => {
            expect(val).toBe(objeto);
        });

        const url = `${API_URL}/1`;
        const req = httpMock.expectOne(url);
        expect(req.request.method).toEqual('PUT');

        httpMock.verify();
    });

    it('#save without Id should call http POST kethod for the given route', () => {
        delete objeto.id;
        service.save(objeto).subscribe(val => {
            expect(val).toBe(objeto);
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

