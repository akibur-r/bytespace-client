import { AuthShell, SignInForm } from "@/components/auth";
import { auth } from "@/lib/content/auth";

export default function SignInPage() {
  return (
    <AuthShell
      heading={auth.signIn.heading}
      subheading={auth.signIn.subheading}
      form={<SignInForm />}
    />
  );
}