'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">onboarding-sigdb1-web documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Digite para pesquisar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Começando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Visão geral
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependências
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4e6a3b5cdc951fd061837c2bc8cd3945"' : 'data-target="#xs-components-links-module-AppModule-4e6a3b5cdc951fd061837c2bc8cd3945"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4e6a3b5cdc951fd061837c2bc8cd3945"' :
                                            'id="xs-components-links-module-AppModule-4e6a3b5cdc951fd061837c2bc8cd3945"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CargoModule.html" data-type="entity-link">CargoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' : 'data-target="#xs-components-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' :
                                            'id="xs-components-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' }>
                                            <li class="link">
                                                <a href="components/CargoFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CargoFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CargoListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CargoListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' : 'data-target="#xs-injectables-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injetáveis</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' :
                                        'id="xs-injectables-links-module-CargoModule-476294bc1c4a01a734b7c0515e322065"' }>
                                        <li class="link">
                                            <a href="injectables/CargoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CargoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' : 'data-target="#xs-components-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' :
                                            'id="xs-components-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' }>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' : 'data-target="#xs-injectables-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injetáveis</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' :
                                        'id="xs-injectables-links-module-CoreModule-86b904889c522ef98d7c250ee701c49b"' }>
                                        <li class="link">
                                            <a href="injectables/LoaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmpresaModule.html" data-type="entity-link">EmpresaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' : 'data-target="#xs-components-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' :
                                            'id="xs-components-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' }>
                                            <li class="link">
                                                <a href="components/EmpresaFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmpresaListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmpresaListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' : 'data-target="#xs-injectables-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injetáveis</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' :
                                        'id="xs-injectables-links-module-EmpresaModule-4ff73b4e522a4ca83414cc421a1f5230"' }>
                                        <li class="link">
                                            <a href="injectables/EmpresaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EmpresaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FuncionarioModule.html" data-type="entity-link">FuncionarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' : 'data-target="#xs-components-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' :
                                            'id="xs-components-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' }>
                                            <li class="link">
                                                <a href="components/FuncionarioCargoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FuncionarioCargoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuncionarioEmpresaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FuncionarioEmpresaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuncionarioFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FuncionarioFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuncionarioListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FuncionarioListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' : 'data-target="#xs-injectables-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injetáveis</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' :
                                        'id="xs-injectables-links-module-FuncionarioModule-33273e9421b7e737ab3504628f8ced94"' }>
                                        <li class="link">
                                            <a href="injectables/FuncionarioService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FuncionarioService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' : 'data-target="#xs-components-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' :
                                            'id="xs-components-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' }>
                                            <li class="link">
                                                <a href="components/AutocompleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AutocompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormFeedbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormFeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' : 'data-target="#xs-pipes-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' :
                                            'id="xs-pipes-links-module-SharedModule-55052dfae21ae65246b057aebcbb19d2"' }>
                                            <li class="link">
                                                <a href="pipes/CnpjPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CnpjPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CpfPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CpfPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ExplodePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExplodePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseFormComponent.html" data-type="entity-link">BaseFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseService.html" data-type="entity-link">BaseService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CargoFiltro.html" data-type="entity-link">CargoFiltro</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrudFormComponent.html" data-type="entity-link">CrudFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrudListComponent.html" data-type="entity-link">CrudListComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateHelper.html" data-type="entity-link">DateHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmpresaFiltro.html" data-type="entity-link">EmpresaFiltro</a>
                            </li>
                            <li class="link">
                                <a href="classes/FuncionarioCargo.html" data-type="entity-link">FuncionarioCargo</a>
                            </li>
                            <li class="link">
                                <a href="classes/FuncionarioEmpresa.html" data-type="entity-link">FuncionarioEmpresa</a>
                            </li>
                            <li class="link">
                                <a href="classes/FuncionarioFiltro.html" data-type="entity-link">FuncionarioFiltro</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockActivatedRoute.html" data-type="entity-link">MockActivatedRoute</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockRouter.html" data-type="entity-link">MockRouter</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injetáveis</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CargoService.html" data-type="entity-link">CargoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmpresaService.html" data-type="entity-link">EmpresaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FuncionarioService.html" data-type="entity-link">FuncionarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link">LoaderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link">LoaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cargo.html" data-type="entity-link">Cargo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Empresa.html" data-type="entity-link">Empresa</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Funcionario.html" data-type="entity-link">Funcionario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Result.html" data-type="entity-link">Result</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SigError.html" data-type="entity-link">SigError</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelânea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Funções</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variáveis</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura da documentação</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentação gerada usando <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});