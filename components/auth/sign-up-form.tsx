import Link from "next/link";

import { AuthField } from "@/components/auth/auth-field";
import { AuthForm } from "@/components/auth/auth-form";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/content/auth";

export function SignUpForm() {
  const { subheading, title, actionLabel, fields, prompt } = auth.signUp.form;

  return (
    <AuthForm
      subheading={subheading}
      title={title}
      footer={
        <p className="body-m text-gray-700 text-center">
          {prompt.text}{" "}
          <Link href={prompt.linkHref} className="text-blue-800">
            {prompt.linkLabel}
          </Link>
        </p>
      }
    >
      <AuthField
        id="full-name"
        autoComplete="name"
        label={fields.fullName.label}
        placeholder={fields.fullName.placeholder}
      />

      <AuthField
        id="email"
        type="email"
        autoComplete="email"
        label={fields.email.label}
        placeholder={fields.email.placeholder}
      />

      <AuthField
        id="password"
        type="password"
        autoComplete="new-password"
        label={fields.password.label}
        placeholder={fields.password.placeholder}
      />

      <Button
        type="submit"
        className="label-l! h-12 self-end rounded-full px-8 cursor-pointer"
      >
        {actionLabel}
      </Button>
    </AuthForm>
  );
}