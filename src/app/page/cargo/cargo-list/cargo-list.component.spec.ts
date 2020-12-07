import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '@page/home/home.component';
import { CardComponent } from '@shared/component/card/card.component';
import { FilterComponent } from '@shared/component/filter/filter.component';
import { ModalComponent } from '@shared/component/modal/modal.component';
import { MockRouter } from '@shared/test/mock-router';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { CargoService } from '../cargo.service';

import { CargoListComponent } from './cargo-list.component';

describe('CargoListComponent', () => {
    let component: CargoListComponent;
    let fixture: ComponentFixture<CargoListComponent>;
    let service: CargoService;
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
                HomeComponent,
                CargoListComponent,
            ],
            providers: [
                CargoService,
                { provide: Router, useClass: MockRouter },
            ],
        });

        await TestBed.compileComponents();

        router = TestBed.get(Router);
        service = TestBed.get(CargoService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.get(HttpClient);

        fixture = TestBed.createComponent(CargoListComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });


    it('Should create', () => {
        expect(component).toBeTruthy();
    });
});
