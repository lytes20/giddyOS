// menu.types.ts

export interface MenuItem {
  name: string;
  action?: string;
}
export interface Menu {
  label: string;
  items: MenuItem [];
}