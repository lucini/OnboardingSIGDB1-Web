import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CrudFormComponent } from "../../shared/component/crud-form.component";
import { Funcionario } from "../../shared/model/funcionario";
import { FuncionarioService } from "./funcionario.service";

@Component({
    selector: 'app-funcionario-form',
    templateUrl: 'funcionario-form.component.html'
})

export class FuncionarioFormComponent extends CrudFormComponent<Funcionario> implements OnInit {

    constructor(private service: FuncionarioService,
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
            nome: ['', Validators.required],
            cpf: ['', Validators.required],
        });
    }

    voltar(): void {
        this.router.navigate(['/funcionario']);
    }

    salvar(): void {
       this.service.save(this.formGroup.value).subscribe(() => this.voltar());
    }
}