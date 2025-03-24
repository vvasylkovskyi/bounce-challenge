import {
  ErrorContainerTextNative,
  GenericTextNative,
  GenericViewNative,
  TextInputComponentNative,
} from "@packages/ui-components-native";

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
    <GenericViewNative>
      <GenericTextNative>{title}</GenericTextNative>
      <TextInputComponentNative
        placeholder={title}
        value={value}
        onChangeText={onChange}
        hasError={isDirty && !isValid}
      />
      {isDirty && !isValid && (
        <ErrorContainerTextNative>{errorMessage}</ErrorContainerTextNative>
      )}
    </GenericViewNative>
  );
};
