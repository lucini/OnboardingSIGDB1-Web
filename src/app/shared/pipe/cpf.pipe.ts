import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpf'
})

export class CpfPipe implements PipeTransform {
    transform(value: any): string {
        // return maskBr.cpf(value);
        return value;
    }
}