import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function AuthField({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required = true,
  children,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  autoComplete?: "name" | "email" | "new-password" | "current-password";
  required?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Field>
      <FieldLabel htmlFor={id} className="label-s! text-gray-950">
        {label}
      </FieldLabel>
      <Input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="body-l! h-12 rounded-xl placeholder:text-gray-400 ring-1 ring-gray-100 border-none px-6"
      />
      {children}
    </Field>
  );
}