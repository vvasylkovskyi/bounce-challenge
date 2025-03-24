import {
  ErrorContainerTextWeb,
  GenericTextWeb,
  GenericViewWeb,
  TextInputComponentWeb,
} from "@packages/ui-components-web";

type FormInputProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
  isDirty: boolean;
  isValid: boolean;
  errorMessage: string;
};

export const FormInput = ({
  title,
  value,
  onChange,
  isDirty,
  isValid,
  errorMessage,
}: FormInputProps) => {
  return (
    <GenericViewWeb>
      <GenericTextWeb>{title}</GenericTextWeb>
      <TextInputComponentWeb
        placeholder={title}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        hasError={isDirty && !isValid}
      />
      {isDirty && !isValid && (
        <ErrorContainerTextWeb>{errorMessage}</ErrorContainerTextWeb>
      )}
    </GenericViewWeb>
  );
};
