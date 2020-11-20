import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil/src/mask';

@Pipe({
    name: 'cnpj'
})

export class CnpjPipe implements PipeTransform {
    transform(value: any): string {
        return maskBr.cnpj(value);
    }
}