import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CrudFormComponent } from "../../shared/component/crud-form.component";
import { Cargo } from "../../shared/model/cargo";
import { CargoService } from "./cargo.service";

@Component({
    selector: 'app-cargo-form',
    templateUrl: 'cargo-form.component.html'
})

export class CargoFormComponent extends CrudFormComponent<Cargo> implements OnInit {

    constructor(private service: CargoService,
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
            super();
         }

    ngOnInit() {
        this.initForm();
        this.activatedRoute.paramMap.subscribe(params => {
            const id = parseInt(params.get('id'));
            if (id) {
                this.service.findById(id).subscribe( val => {
                    if(val) {
                        this.formGroup.setValue(val)
                    } else {
                        this.voltar();
                    }
                });
            }
        });
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