import { AuthShell } from "@/components/auth";
import { auth } from "@/lib/content/auth";

export default function SignUpPage() {
  return (
    <AuthShell
      heading={auth.signUp.heading}
      subheading={auth.signUp.subheading}
    />
  );
}