import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'explode'
})

export class ExplodePipe implements PipeTransform {
    transform(values: any[], ...args: any[]): string {
        if (values) {
            return values.map( val => val[args[0]]).join(', ');
        }
        return '';
    }
}