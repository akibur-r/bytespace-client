import { ShoppingBag, type LucideIcon } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type HeaderAction = {
  label?: string;
  href: string;
  icon?: LucideIcon;
};

export const headerNav = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
] satisfies NavLink[];

export const headerActions = {
  signIn: {
    label: "Sign in",
    href: "/sign-in",
  },
  signUp: {
    label: "Join us",
    href: "/sign-up",
  },
  cart: {
    href: "/cart",
    icon: ShoppingBag,
  },
} satisfies Record<string, HeaderAction>;