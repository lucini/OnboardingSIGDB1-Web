import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})

export class CpfPipe implements PipeTransform {
    transform(value: any): string {
        if (value) {
            value = value.replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

            return value;
        }
        return '';
    }
}
