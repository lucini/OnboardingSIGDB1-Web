import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-cargo-form',
    templateUrl: 'cargo-form.component.html'
})

export class CargoFormComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    voltar(): void {
        this.router.navigate(['/cargo']);
    }
}