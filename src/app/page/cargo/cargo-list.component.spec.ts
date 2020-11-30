import { CargoListComponent } from './cargo-list.component';
import { CargoService } from './cargo.service';



describe('CargoListComponent', () => {
    let component: CargoListComponent;
    const serviceMock = new CargoService(null);
    let injectorMock;

    beforeEach(() => {

        injectorMock = {
            get: jest.fn(),
        };


        component = new CargoListComponent(serviceMock, injectorMock);
    });

    describe('Setup Component', () => {
        describe('ngOnInit', () => {
            it('should call findAll from service', () => {
                const serviceSpy = jest.spyOn(serviceMock, 'findAll');
                component.ngOnInit();

                expect(serviceSpy).toBeCalled();
            });
        });
    });
});
