import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CrudListComponent } from "../../shared/component/crud-list.component";
import { Cargo } from "../../shared/model/cargo";
import { CargoService } from "./cargo.service";

@Component({
    selector: 'app-cargo-list',
    templateUrl: 'cargo-list.component.html',
})

export class CargoListComponent extends CrudListComponent<Cargo>  {

    constructor(protected service: CargoService,
        private router: Router) {
        super(service);
    }

    novo(): void {
        this.router.navigate(['/cargo/form']);
    }

    editar(id: number): void {
        this.router.navigate(['/cargo/form', id]);
    }
}