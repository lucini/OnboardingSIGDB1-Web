export interface MenuItem {
    title: string;
    icon?: string;
    routerLink?: string;
    active?: boolean;
    click?: Function;
    modal?: boolean;
    targetModal?: string;
}
