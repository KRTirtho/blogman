import React, { FC } from "react";
import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";

interface FormFieldProps extends InputProps {
  label: string;
  name: string;
  fullWidth?: boolean;
}

const FormField: FC<FormFieldProps> = ({ fullWidth, ...props }) => {
  const formContext = useFormContext();

  return (
    <div className={`space-y-2 ${fullWidth ? "w-full" : ""}`}>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        {...props}
        {...formContext.register(props.name)}
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
