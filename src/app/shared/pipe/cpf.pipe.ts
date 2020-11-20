import { Pipe, PipeTransform } from '@angular/core';
import { maskBr } from 'js-brasil';

@Pipe({
    name: 'cpf'
})

export class CpfPipe implements PipeTransform {
    transform(value: any): string {
        return maskBr.cpf(value);
    }
}