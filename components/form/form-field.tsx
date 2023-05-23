import React, { FC, useId } from "react";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";

interface FormFieldProps extends InputProps {
  label: string;
  name: string;
  fullWidth?: boolean;
}

const FormField: FC<FormFieldProps> = ({ fullWidth, label, ...props }) => {
  const formContext = useFormContext();
  const rid = useId();

  const id = props.id ?? rid;

  return (
    <div className={`space-y-2 ${fullWidth ? "w-full" : ""}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...props}
        {...formContext.register(props.name)}
        id={id}
        className={`${props.className} ${fullWidth ? "w-full" : ""}`}
      />
      {formContext.formState.errors[props.name] && (
        <span className="text-destructive text-sm">
          {formContext.formState.errors[props.name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default FormField;
