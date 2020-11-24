import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnpj'
})

export class CnpjPipe implements PipeTransform {
    transform(value: any): string {
        if (value) {
            value = value.replace(/\D/g, '')
                .replace(/^(\d{2})(\d)/, '$1.$2')
                .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
                .replace(/\.(\d{3})(\d)/, '.$1/$2')
                .replace(/(\d{4})(\d)/, '$1-$2');
            return value;
        }
        return '';
    }
}
