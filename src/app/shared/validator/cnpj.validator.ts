import { AbstractControl } from '@angular/forms';

export function CnpjValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const invalid = { 'cnpj': true };
    const cnpj = control.value.replace(/[^\d]+/g, '');

    if (cnpj === '') {
        return invalid;
    }

    if (cnpj.length !== 14) {
        return invalid;
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return invalid;
    }

    // TODO Validar digitos

    return null;
}
