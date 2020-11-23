import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudFormComponent } from '../../shared/component/crud-form.component';
import { Empresa } from '../../shared/model/empresa';
import { EmpresaService } from './empresa.service';

@Component({
    selector: 'app-empresa-form',
    templateUrl: 'empresa-form.component.html'
})

export class EmpresaFormComponent extends CrudFormComponent<Empresa> implements OnInit {

    constructor(private service: EmpresaService,
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.initForm();
        this.activatedRoute.paramMap.subscribe(params => {
            // tslint:disable-next-line: radix
            const id = parseInt(params.get('id'));
            if (id) {
                this.service.findById(id).subscribe(val => {
                    if (val) {
                        this.formGroup.setValue(val);
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
            cnpj: ['', Validators.required],
            dataFundacao: ['', Validators.required],
        });
    }

    voltar(): void {
        this.router.navigate(['/empresa']);
    }

    salvar(): void {
        this.service.save(this.formGroup.value).subscribe(() => this.voltar());
    }
}
