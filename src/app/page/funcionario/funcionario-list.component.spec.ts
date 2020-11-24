import { FuncionarioListComponent } from './funcionario-list.component';
import { FuncionarioService } from './funcionario.service';



describe('FuncionarioListComponent', () => {
    let component: FuncionarioListComponent;
    const serviceMock = new FuncionarioService();
    let injectorMock;

    beforeEach(() => {

        injectorMock = {
            get: jest.fn(),
        };


        component = new FuncionarioListComponent(serviceMock, injectorMock);
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
