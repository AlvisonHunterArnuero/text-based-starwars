export interface DrawerMenuItem {
    title: string;
    path: string;
    icon: React.ReactNode;
    subItems?: DrawerMenuItem[];
}
