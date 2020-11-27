import { FuncionarioListComponent } from './funcionario-list.component';
import { FuncionarioService } from './funcionario.service';



describe('FuncionarioListComponent', () => {
    let component: FuncionarioListComponent;
    const serviceMock = new FuncionarioService(null);
    let injectorMock;

    beforeEach(() => {

        injectorMock = {
            get: jest.fn(),
        };


        component = new FuncionarioListComponent(serviceMock, injectorMock, null, null);
    });

    describe('Setup Component', () => {
        describe('ngOnInit', () => {
            it('should call findAllWithFilter from service', () => {
                const serviceSpy = jest.spyOn(serviceMock, 'findAllWithFilter');
                component.ngOnInit();

                expect(serviceSpy).toBeCalled();
            });
        });
    });
});
