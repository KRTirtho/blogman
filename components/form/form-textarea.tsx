import React, { FC } from "react";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";
import { Textarea, TextareaProps } from "../ui/textarea";

interface FormTextareaProps extends TextareaProps {
  label: string;
  name: string;
}

const FormTextarea: FC<FormTextareaProps> = (props) => {
  const formContext = useFormContext();

  return (
    <div className="space-y-2">
      <Label htmlFor={props.name}>{props.label}</Label>
      <Textarea {...props} {...formContext.register(props.name)} />
      {formContext.formState.errors[props.name] && (
        <span className="text-destructive text-sm">
          {formContext.formState.errors[props.name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default FormTextarea;
