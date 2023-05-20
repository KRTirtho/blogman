import { FormHTMLAttributes } from "react";
import { FC, FormEventHandler } from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormContainerProps<TFieldValues extends FieldValues = FieldValues>
  extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  formContext: UseFormReturn<TFieldValues, any>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

function FormContainer<TFieldValues extends FieldValues = FieldValues>({
  children,
  formContext,
  onSubmit,
  ...props
}: FormContainerProps<TFieldValues>) {
  return (
    <FormProvider {...formContext}>
      <form {...props} onSubmit={onSubmit}>
        {children}
      </form>
    </FormProvider>
  );
}

export default FormContainer;
