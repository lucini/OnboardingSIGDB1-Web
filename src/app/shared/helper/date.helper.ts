import { IMyDateModel } from "ngx-mydatepicker";

export class DateHelper {
    static convertToDateJs(value: string): Date {
        if (value) {
            const dateArray = value.split('/');
            const day = dateArray[0];
            const month = dateArray[1];
            const year = dateArray[2];
            return new Date(`${year}}-${month}-${day}`);
        }
        return null;
    }

    static converToDatePicker(value: string): IMyDateModel {
        if (value) {
            // tslint:disable-next-line: radix
            const dateArray = value.split('/').map(val => parseInt(val));
            const [day, month, year] = dateArray;
            const jsdate = this.convertToDateJs(value);
            return {
                date: { year, month, day },
                jsdate,
                formatted: value,
                epoc: null,
            };
        }
        return null;
    }

    static convertToFormattedString(value: any): string {
        return `${value['day']}}/${value['month']}/${value['year']}`;
    }
}