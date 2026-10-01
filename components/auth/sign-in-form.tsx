import Image from "next/image";
import Link from "next/link";

import { AuthField } from "@/components/auth/auth-field";
import { AuthForm } from "@/components/auth/auth-form";
import facebook from "@/components/shared/facebook.svg";
import google from "@/components/shared/google.svg";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import { auth } from "@/lib/content/auth";

const SOCIAL_CLASSNAME =
  "h-auto aspect-square rounded-3xl p-4 text-black ring-1 ring-gray-200 cursor-pointer";

export function SignInForm() {
  const { subheading, title, actionLabel, fields, prompt } = auth.signIn.form;

  return (
    <AuthForm
      subheading={subheading}
      title={title}
      footer={
        <div className="flex flex-col">
          <FieldSeparator>or</FieldSeparator>

          <div className="mt-12 flex justify-center gap-4">
            <Button
              type="button"
              variant="ghost"
              title="Facebook"
              className={SOCIAL_CLASSNAME}
            >
              <Image src={facebook} alt="" className="size-8" />
            </Button>

            <Button
              type="button"
              variant="ghost"
              title="Google"
              className={SOCIAL_CLASSNAME}
            >
              <Image src={google} alt="" className="size-8" />
            </Button>
          </div>

          <p className="body-m mt-18 text-center text-gray-400">
            {prompt.text}{" "}
            <Link href={prompt.linkHref} className="text-blue-800">
              {prompt.linkLabel}
            </Link>
          </p>
        </div>
      }
    >
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
        autoComplete="current-password"
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