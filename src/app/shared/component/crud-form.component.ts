import { Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SigError } from '@shared/model/error';
import { tap } from 'rxjs/operators';
import swal from 'sweetalert2/dist/sweetalert2.min.js';


import { DATE_PICKER_OPTION } from '../constant/constant';
import { BaseService } from '../service/base.service';

export abstract class CrudFormComponent<T> implements OnInit {
    id: number;
    formGroup: FormGroup;
    dpOptions = DATE_PICKER_OPTION;
    protected activatedRoute: ActivatedRoute;
    protected router: Router;
    protected fb: FormBuilder;

    constructor(protected service: BaseService<T>, protected injector: Injector, protected route = '') {
        this.activatedRoute = this.injector.get(ActivatedRoute);
        this.router = this.injector.get(Router);
        this.fb = this.injector.get(FormBuilder);
    }

    ngOnInit(): void {
        this.initForm();
        this.activatedRoute.paramMap.subscribe(params => {
            if (params.has('id')) {
                this.id = +params.get('id');
                this.service.findById(this.id).subscribe(val => {
                    if (val) {
                        this.formGroup.setValue(val);
                        this.postEdit();
                    } else {
                        this.voltar();
                    }
                });
            }
        });
    }

    isValid(campo: string): boolean {
        return this.formGroup.controls[campo].invalid &&
            (this.formGroup.controls[campo].dirty || this.formGroup.controls[campo].touched);
    }

    abstract initForm(): void;


    voltar(): void {
        this.router.navigate([`/${this.route}`]);
    }

    preSave(): void {

    }

    postSave(): void {

    }

    postEdit(): void {

    }

    save(): void {
        this.service.save(this.formGroup.value)
            .pipe(tap(() => this.preSave()))
            .subscribe(
                () => {
                    this.postSave();
                    swal.fire('Ok', 'Salvo com sucesso', 'success').then(() => this.voltar());
                },
                (error: SigError) => this.showError(error)
            );
    }

    clearField(...fields: string[]): void {
        const obj = {};
        fields.forEach(field => obj[field] = null);
        this.formGroup.patchValue(obj);
    }

    showError(sigError: SigError): void {
        const { error } = sigError;
        const errorList = `<ul>${error.map(e => `<li>${e}</li>`)}</ul>`;

        swal.fire('Atenção', errorList, 'warning');
    }
}
