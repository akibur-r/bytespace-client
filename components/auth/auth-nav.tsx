import Link from "next/link";

import { Container } from "@/components/layout";
import { Logo } from "@/components/shared";

export function AuthNav() {
  return (
    <Container className="py-9">
      <Link href="/" aria-label="Bytespace">
        <Logo variant="mark" size="xl"/>
      </Link>
    </Container>
  );
}