import { Masthead } from "@/components/layout";
import { AuthNav } from "@/components/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Masthead header={<AuthNav />}>
      {children}
    </Masthead>
  );
}