import { Container } from "@/components/layout";
import { AuthShowcase } from "@/components/auth/auth-showcase";

export function AuthShell({
  heading,
  subheading,
  form,
}: {
  heading: string;
  subheading: string;
  form?: React.ReactNode;
}) {
  return (
    <Container className="pb-30">
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-36">
        <div className="flex flex-col gap-15">
          <div className="flex flex-col items-start gap-4">
            <h1 className="heading-xs text-left text-gray-50">{heading}</h1>
            <p className="body-l text-left text-gray-50">{subheading}</p>
          </div>

          <AuthShowcase />
        </div>

        {form}
      </div>
    </Container>
  );
}