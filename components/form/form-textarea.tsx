import React, { FC, useId } from "react";
import { Label } from "../ui/label";
import { useFormContext } from "react-hook-form";
import { Textarea, TextareaProps } from "../ui/textarea";

interface FormTextareaProps extends TextareaProps {
  label: string;
  name: string;
}

const FormTextarea: FC<FormTextareaProps> = ({ label, ...props }) => {
  const formContext = useFormContext();

  const rid = useId();

  const id = props.id ?? rid;

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea {...props} {...formContext.register(props.name)} id={id} />
      {formContext.formState.errors[props.name] && (
        <span className="text-destructive text-sm">
          {formContext.formState.errors[props.name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default FormTextarea;
