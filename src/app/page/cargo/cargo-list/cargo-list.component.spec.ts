import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '@shared/component/card/card.component';
import { FilterComponent } from '@shared/component/filter/filter.component';
import { ModalComponent } from '@shared/component/modal/modal.component';

import { CargoService } from '../cargo.service';

import { CargoListComponent } from './cargo-list.component';

describe('CargoListComponent', () => {
    let component: CargoListComponent;
    let fixture: ComponentFixture<CargoListComponent>;
    let service: CargoService;
    let injector: Injector;
    let httpMock: HttpTestingController;



    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                CardComponent,
                FilterComponent,
                ModalComponent,
                CargoListComponent,
            ],
            providers: [
                CargoService,
            ],
        });

        await TestBed.compileComponents();

        service = TestBed.get(CargoService);
        injector = TestBed.get(Injector);
        fixture = TestBed.createComponent(CargoListComponent);
        component = fixture.componentInstance;
        httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);

        // spyOn(service, 'findAllWithFilter').and.returnValue(of({lista: [objeto], total: 1}));

        fixture.detectChanges();
    });


    it('Should create', () => {
        expect(component).toBeTruthy();
    });
});
