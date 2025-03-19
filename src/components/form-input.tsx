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
    <div>
      <label>{title}</label>
      <input
        type="text"
        placeholder={title}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input-component ${
          isDirty && !isValid ? "input-error" : ""
        }`}
      />
      {isDirty && !isValid && <p className="error-text">{errorMessage}</p>}
    </div>
  );
};
