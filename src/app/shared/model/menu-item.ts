export interface MenuItem {
    title: string;
    icon?: string;
    routerLink?: string;
    active?: boolean;
    click?: (x?: any) => void;
    modal?: boolean;
    targetModal?: string;
}
