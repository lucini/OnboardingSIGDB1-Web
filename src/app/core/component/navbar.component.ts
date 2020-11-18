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
            { title: 'Empresas', routerLink: '/empresa' },
            { title: 'Funcionários', routerLink: '/funcionario' },
            { title: 'Cargos', routerLink: '/cargo' },
        ];
    }
}