import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Cargo } from "../../shared/model/cargo";
import { CargoService } from "./cargo.service";

@Component({
    selector: 'app-cargo-form',
    templateUrl: 'cargo-form.component.html'
})

export class CargoFormComponent implements OnInit {
    formGroup: FormGroup;

    constructor(private service: CargoService,
        private fb: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.formGroup = this.fb.group({
            id: [''],
            descricao: ['', Validators.required],
        });
    }

    voltar(): void {
        this.router.navigate(['/cargo']);
    }

    salvar(): void {
       this.service.save(this.formGroup.value).subscribe(() => this.voltar());
    }
}