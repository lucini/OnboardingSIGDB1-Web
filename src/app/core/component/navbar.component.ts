import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/model/menu-item';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {

    menuItens: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.menuItens = [
            { title: 'Empresas', routerLink: '/empresa', icon: 'fa fa-building' },
            { title: 'Funcionários', routerLink: '/funcionario', icon: 'fa fa-id-badge' },
            { title: 'Cargos', routerLink: '/cargo', icon: 'fa fa-black-tie' },
        ];
    }
}