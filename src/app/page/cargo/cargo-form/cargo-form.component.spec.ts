import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from '@shared/component/card/card.component';
import { FilterComponent } from '@shared/component/filter/filter.component';
import { FormFeedbackComponent } from '@shared/component/form-feedback/form-feedback.component';
import { ModalComponent } from '@shared/component/modal/modal.component';
import { MockActivatedRoute } from '@shared/mock/mock-activated-route';
import { MockRouter } from '@shared/mock/mock-router';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { CargoService } from '../cargo.service';

import { CargoFormComponent } from './cargo-form.component';


describe('CargoFormComponent', () => {
    let component: CargoFormComponent;
    let fixture: ComponentFixture<CargoFormComponent>;
    let service: CargoService;
    let httpMock: HttpTestingController;
    let httpClient: HttpClient;
    let router: Router;
    let activatedRoute: ActivatedRoute;
    let fb: FormBuilder;



    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                HttpClientTestingModule,
                NgxMyDatePickerModule.forRoot(),
            ],
            declarations: [
                CardComponent,
                FilterComponent,
                ModalComponent,
                CargoFormComponent,
                FormFeedbackComponent,
            ],
            providers: [
                CargoService,
                FormBuilder,
                { provide: Router, useClass: MockRouter },
                { provide: ActivatedRoute, useClass: MockActivatedRoute },
            ],
        });

        await TestBed.compileComponents();

        fb = TestBed.get(FormBuilder);
        router = TestBed.get(Router);
        activatedRoute = TestBed.get(ActivatedRoute);
        service = TestBed.get(CargoService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.get(HttpClient);

        fixture = TestBed.createComponent(CargoFormComponent);
        component = fixture.componentInstance;
        component.initForm();

        fixture.detectChanges();
    });


    it('Should create', () => {
        expect(component).toBeTruthy();
    });

    it('#voltar should return to list', () => {
        component.voltar();
    });
});
