import { Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { BaseService } from '../service/base.service';

export abstract class CrudFormComponent<T> implements OnInit {
    id: number;
    formGroup: FormGroup;
    protected activatedRoute: ActivatedRoute;
    protected router: Router;
    protected fb: FormBuilder;

    constructor(protected service: BaseService<T>, protected injector: Injector, protected endpoint = '') {
        this.activatedRoute = this.injector.get(ActivatedRoute);
        this.router = this.injector.get(Router);
        this.fb = this.injector.get(FormBuilder);
    }

    ngOnInit(): void {
        this.initForm();
        this.activatedRoute.paramMap.subscribe(params => {
            this.id = +params.get('id');
            if (this.id) {
                this.service.findById(this.id).subscribe(val => {
                    if (val) {
                        this.formGroup.setValue(val);
                    } else {
                        this.voltar();
                    }
                });
            }
        });
    }

    isValid(campo): boolean {
        return this.formGroup.controls[campo].invalid &&
            (this.formGroup.controls[campo].dirty || this.formGroup.controls[campo].touched);
    }

    abstract initForm(): void;

    voltar(): void {
        this.router.navigate([`/${this.endpoint}`]);
    }

    preSave(): void {

    }

    postSave(): void {

    }

    save(): void {
        this.service.save(this.formGroup.value)
        .pipe(tap(() => this.preSave()))
        .subscribe(() => {
            this.postSave();
            Swal.fire('Ok', 'Salvo com sucesso', 'success').then(() => this.voltar());
        });
    }
}
