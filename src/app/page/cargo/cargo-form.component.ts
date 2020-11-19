import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
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
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.initForm();
        this.activatedRoute.paramMap.subscribe(params => {
            const id = parseInt(params.get('id'));
            if (id) {
                this.service.findById(id).subscribe( val =>
                    this.formGroup.setValue(val)
                );
            }

        });
    }

    initForm(): void {
        this.formGroup = this.fb.group({
            id: [''],
            descricao: ['', Validators.required],
        });
    }

    isValid(campo): boolean {
        return this.formGroup.controls[campo].invalid &&
          (this.formGroup.controls[campo].dirty || this.formGroup.controls[campo].touched);
    }

    voltar(): void {
        this.router.navigate(['/cargo']);
    }

    salvar(): void {
       this.service.save(this.formGroup.value).subscribe(() => this.voltar());
    }
}