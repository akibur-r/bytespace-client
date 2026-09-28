"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { headerActions, headerNav } from "@/lib/content/navigation";

export function SiteHeader() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="w-full py-6">
      <Container className="flex items-center justify-between gap-6">
        <Link href="/">
          <Logo variant="full" size="xl" />
        </Link>

        <NavigationMenu className="hidden md:flex text-md">
          <NavigationMenuList className="gap-6">
            {headerNav.map((item) => {
              const itemSegment = item.href.split("/")[1] ?? null;
              const isActive = segment === itemSegment;

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    active={isActive}
                    className="text-sm font-medium text-muted-foreground transition-transform hover:text-foreground data-active:-translate-y-6"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-6 ">
          <Link href={headerActions.signIn.href}>
              {headerActions.signIn.label}
            </Link>

          <Link href={headerActions.signUp.href}>
              {headerActions.signUp.label}
            </Link>

          
            <Link href={headerActions.cart.href} aria-label="Cart">
              <headerActions.cart.icon className="size-4" />
            </Link>
        </div>
      </Container>
    </header>
  );
}