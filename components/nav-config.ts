export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const createNavItems = (items: NavItem[]) => items; 