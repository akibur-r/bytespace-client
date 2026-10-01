import Link from "next/link";

import { Logo } from "@/components/shared";
import { siteFooter } from "@/lib/content/site-footer";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { NewsletterForm } from "./newsletter-form";

export function FooterNav() {
  const { tagline, disclaimer } = siteFooter.newsletter;
  const { headings, groups } = siteFooter.nav;

  return (
    <div className="py-18">
      <Container className="grid grid-cols-[auto_1fr] items-start gap-23">
        <div className="space-y-11">
          <div className="space-y-4">
            <Logo variant="full" size="xl" />

            <p className="body-s text-gray-950">{tagline}</p>
          </div>

          <div className="space-y-6">
            <NewsletterForm />

            <p className="body-xs mt-6 max-w-lg text-gray-950">{disclaimer}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-6">
          {headings.map((heading) => (
            <h3
              key={heading.label}
              className={cn(
                "body-m text-left text-gray-400",
                heading.span > 1 && "col-span-2",
              )}
            >
              {heading.label}
            </h3>
          ))}

          {groups.map((group) => (
            <ul
              key={group.links[0].label}
              className="flex flex-col items-start gap-4"
            >
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="body-s text-gray-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>
    </div>
  );
}
