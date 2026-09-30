import Link from "next/link";

import { Container } from "@/components/layout/container";
import { HeaderLink, NavLink } from "@/components/layout/nav-link";
import { CartIcon, Logo } from "@/components/shared";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { headerActions, headerNav } from "@/lib/content/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader({
  variant = "solid",
  className,
}: {
  variant?: "solid" | "overlay";
  className?: string;
}) {
  const isOverlay = variant === "overlay";
  const navColor = isOverlay
    ? "text-gray-50 hover:text-gray-50 focus:text-gray-50"
    : undefined;

  return (
    <header
      className={cn(
        "w-full py-8 md:py-12",
        isOverlay ? "text-white" : "sticky top-0 z-40 bg-background",
        className,
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Link href="/">
          <Logo
            variant="full"
            size="xl"
            className={isOverlay ? "text-white" : undefined}
          />
        </Link>

        <NavigationMenu className="hidden md:flex font-sans">
          <NavigationMenuList className="gap-6">
            {headerNav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavLink href={item.href} className={navColor}>
                  {item.label}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-6">
          <HeaderLink href={headerActions.signIn.href} className={navColor}>
            {headerActions.signIn.label}
          </HeaderLink>

          <HeaderLink href={headerActions.signUp.href} className={navColor}>
            {headerActions.signUp.label}
          </HeaderLink>

          <Link href={headerActions.cart.href} aria-label="Cart">
            <CartIcon />
          </Link>
        </div>
      </Container>
    </header>
  );
}
