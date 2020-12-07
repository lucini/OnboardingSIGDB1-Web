import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardComponent } from '@shared/component/card/card.component';
import { FilterComponent } from '@shared/component/filter/filter.component';
import { ModalComponent } from '@shared/component/modal/modal.component';
import { MockRouter } from '@shared/mock/mock-router';
import { CnpjPipe } from '@shared/pipe/cnpj.pipe';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { EmpresaService } from './../empresa.service';
import { EmpresaListComponent } from './empresa-list.component';


describe('EmpresaListComponent', () => {
    let component: EmpresaListComponent;
    let fixture: ComponentFixture<EmpresaListComponent>;
    let service: EmpresaService;
    let httpMock: HttpTestingController;
    let httpClient: HttpClient;
    let router: Router;



    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule,
                NgxMyDatePickerModule.forRoot(),
            ],
            declarations: [
                CardComponent,
                FilterComponent,
                ModalComponent,
                EmpresaListComponent,
                CnpjPipe,
            ],
            providers: [
                EmpresaService,
                { provide: Router, useClass: MockRouter },
            ],
        });

        await TestBed.compileComponents();

        router = TestBed.get(Router);
        service = TestBed.get(EmpresaService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.get(HttpClient);

        fixture = TestBed.createComponent(EmpresaListComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });


    it('Should create', () => {
        expect(component).toBeTruthy();
    });
});
