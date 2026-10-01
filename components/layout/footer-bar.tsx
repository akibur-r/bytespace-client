import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { siteFooter } from "@/lib/content/site-footer";
import { Container } from "./container";

export function FooterBar() {
  const { copyright, links } = siteFooter.legal;

  return (
    <div className="">
      <Container className="py-12">
        <Separator />

        <div className="flex items-center justify-between py-6">
          <p className="body-xs text-gray-950">{copyright}</p>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="body-xs text-gray-950"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}