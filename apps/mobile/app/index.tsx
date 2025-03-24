import { CheckoutSummaryComponent } from "@/components/checkout-summary-component";
import { InputFormComponent } from "@/components/input-form-component";
import { NumberOfBagsComponent } from "@/components/number-of-bags-component";
import { ToggleSwitch } from "@/components/toggle-switch";
import { useValidateForm } from "@packages/hooks";
import { AppState } from "@packages/types";
import {
  MainContainerInnerWrapperNative,
  MainContainerNative,
  MainContainerTitleWrapperNative,
  SubtitleNative,
  TitleNative,
  ToggleSwitchWrapperNative,
} from "@packages/ui-components-native";
import { router } from "expo-router";
import { useCallback, useState } from "react";

export default function Index() {
  const [isSimulateErrorEnabled, setIsSimulateErrorEnabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [numberOfBags, setNumberOfBags] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { checkFormValidity, validateIsRequired, markStateInvalid } =
    useValidateForm();

  const initialState = {
    email: {
      value: "",
      isValid: false,
      isDirty: false,
      validate: validateIsRequired,
      errorMessage: "Email is required",
    },
    name: {
      value: "",
      isValid: false,
      isDirty: false,
      validate: validateIsRequired,
      errorMessage: "Name is required",
    },
    cardDetails: {
      value: "",
      isValid: false,
      isDirty: false,
      validate: validateIsRequired,
      errorMessage: "Card details are required",
    },
  };

  const [formState, setFormState] = useState<AppState>(initialState);

  const handleOnChange = useCallback(
    (propertyKey: keyof AppState, value: string) => {
      const isValid = formState[propertyKey].validate(value);
      setFormState((prev) => ({
        ...prev,
        [propertyKey]: {
          ...prev[propertyKey],
          value,
          isValid,
          isDirty: true,
        },
      }));
    },
    [
      numberOfBags,
      formState.name.value,
      formState.email.value,
      formState.cardDetails.value,
    ]
  );

  const handleOnBook = useCallback(async () => {
    const isFormValid = checkFormValidity(formState);
    if (!isFormValid) {
      const newState = markStateInvalid(formState);
      setFormState(newState);
      return;
    }
    setIsSubmitting(true);
    setIsError(false);

    if (isSimulateErrorEnabled) {
      setTimeout(() => {
        setIsError(true);
        setIsSubmitting(false);
      }, 2000);
      return;
    }

    setTimeout(() => {
      setIsError(false);
      setFormState(initialState);
      router.push("/success");
    }, 2000);
  }, [
    checkFormValidity,
    setIsError,
    setIsSubmitting,
    markStateInvalid,
    formState,
    isSimulateErrorEnabled,
    isSubmitting,
    isError,
    router,
  ]);
  return (
    <MainContainerNative>
      <MainContainerInnerWrapperNative>
        <MainContainerTitleWrapperNative>
          <SubtitleNative>Booking storage at: </SubtitleNative>
          <TitleNative>Cody's Cookie Store</TitleNative>
        </MainContainerTitleWrapperNative>

        <NumberOfBagsComponent
          numberOfBags={numberOfBags}
          setNumberOfBags={setNumberOfBags}
        />

        <InputFormComponent
          name={formState.name}
          setName={(value: string) => handleOnChange("name", value)}
          email={formState.email}
          setEmail={(value: string) => handleOnChange("email", value)}
          cardDetails={formState.cardDetails}
          setCardDetails={(value: string) =>
            handleOnChange("cardDetails", value)
          }
        />

        <ToggleSwitchWrapperNative>
          <ToggleSwitch
            label={"Simulate Error"}
            isToggled={isSimulateErrorEnabled}
            onChange={(isToggled) => setIsSimulateErrorEnabled(isToggled)}
          />
        </ToggleSwitchWrapperNative>
      </MainContainerInnerWrapperNative>

      <CheckoutSummaryComponent
        onBook={handleOnBook}
        numberOfBags={numberOfBags}
        isSubmitting={isSubmitting}
        isError={isError}
      />
    </MainContainerNative>
  );
}
