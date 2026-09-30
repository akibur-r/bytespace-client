import { Container } from "@/components/layout";
import { PartnerLogos } from "@/components/marketing/partner-logos";

export function Partners() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <PartnerLogos />
      </Container>
    </section>
  );
}