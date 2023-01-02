import { ReactNode, useEffect } from "react";
import { useForm, UseFormProps, FormProvider } from "react-hook-form";
import { ReactElement } from "../interfaces/react";

interface FormProps extends UseFormProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  cleanOnSubmit?: boolean;
  id?: string;
  onReset?: () => void;
  onSubmit: (...params: any[]) => void;
}

export const Form = ({
  children,
  className,
  id,
  // onReset,
  onSubmit,
  mode,
  defaultValues,
  resolver,
  context,
  criteriaMode,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  delayError,
  cleanOnSubmit = true,
  reValidateMode = "onChange",
}: FormProps): ReactElement => {
  const methods = useForm({
    mode,
    reValidateMode,
    defaultValues,
    resolver,
    context,
    criteriaMode,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    delayError,
  });

  useEffect(() => {
    // methods.reset(defaultValues);
  }, [defaultValues]);

  const onError = (error: any) => {
    console.log({ error });
  };

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        id={id}
        onSubmit={(e) => {
          e.preventDefault();
          methods.handleSubmit(onSubmit, onError)();
        }}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
};
