import { Text, View } from "react-native";
import { ErrorContainerText, TextInputComponent } from "./styles/styles";

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
    <View>
      <Text>{title}</Text>
      <TextInputComponent
        placeholder={title}
        value={value}
        onChangeText={onChange}
        isDirty={isDirty}
        isValid={isValid}
        errorMessage={errorMessage}
        hasError={isDirty && !isValid}
      />
      {isDirty && !isValid && (
        <ErrorContainerText>{errorMessage}</ErrorContainerText>
      )}
    </View>
  );
};
