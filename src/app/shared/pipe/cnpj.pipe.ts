import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cnpj'
})

export class CnpjPipe implements PipeTransform {
    transform(value: any): string {
        // return maskBr.cnpj(value);
        return value;
    }
}