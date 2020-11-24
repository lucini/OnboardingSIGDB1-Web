import { EmpresaListComponent } from './empresa-list.component';
import { EmpresaService } from './empresa.service';



describe('EmpresaListComponent', () => {
    let component: EmpresaListComponent;
    const serviceMock = new EmpresaService();
    let injectorMock;

    beforeEach(() => {

        injectorMock = {
            get: jest.fn(),
        };


        component = new EmpresaListComponent(serviceMock, injectorMock);
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
