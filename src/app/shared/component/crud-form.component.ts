import { FormGroup } from '@angular/forms';

export abstract class CrudFormComponent<T> {
    formGroup: FormGroup;

    isValid(campo): boolean {
        return this.formGroup.controls[campo].invalid &&
          (this.formGroup.controls[campo].dirty || this.formGroup.controls[campo].touched);
    }
}
