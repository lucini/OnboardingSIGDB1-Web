import { NavigationExtras } from '@angular/router';

export class MockRouter {
    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
        return new Promise((res, reject) => res(true));
    }
}
