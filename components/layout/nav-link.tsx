"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type HeaderLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

function useIsActive(href: string) {
  const pathname = usePathname();
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClasses(isActive: boolean) {
  return cn(
    "text-base transition-colors",
    "hover:bg-transparent focus:bg-transparent",
    "data-active:-translate-y-1",
    "data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent",
    isActive ? "label-m" : "body-m",
  );
}

export function NavLink({ href, className, children }: HeaderLinkProps) {
  const isActive = useIsActive(href);

  return (
    <NavigationMenuLink
      render={<Link href={href} />}
      active={isActive}
      className={cn(navLinkClasses(isActive), className)}
    >
      {children}
    </NavigationMenuLink>
  );
}

export function HeaderLink({ href, className, children }: HeaderLinkProps) {
  const isActive = useIsActive(href);

  return (
    <Link href={href} className={cn(navLinkClasses(isActive), className)}>
      {children}
    </Link>
  );
}
