"use client";

import { useValidateForm } from "@packages/hooks";
import { AppState } from "@packages/types";
import {
  CheckoutSummaryComponent,
  InputFormComponent,
  MainContainer,
  MainContainerInnerWrapper,
  MainContainerTitleWrapper,
  NumberOfBagsComponent,
  Subtitle,
  Title,
  ToggleSwitch,
  ToggleSwitchWrapper,
} from "@packages/ui-components";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  background: red;
`;

export default function Home() {
  const router = useRouter();

  const [isSimulateErrorEnabled, setIsSimulateErrorEnabled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [numberOfBags, setNumberOfBags] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { checkFormValidity, validateIsRequired, markStateInvalid } =
    useValidateForm();

  const [formState, setFormState] = useState<AppState>({
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
  });

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
    <Container>
      <MainContainer>
        <MainContainerInnerWrapper>
          <MainContainerTitleWrapper>
            <Subtitle>Booking storage at: </Subtitle>
            <Title>Cody's Cookie Store</Title>
          </MainContainerTitleWrapper>

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

          <ToggleSwitchWrapper>
            <ToggleSwitch
              label={"Simulate Error"}
              isToggled={isSimulateErrorEnabled}
              onChange={(isToggled) => setIsSimulateErrorEnabled(isToggled)}
            />
          </ToggleSwitchWrapper>
        </MainContainerInnerWrapper>

        <div style={{ marginTop: "16px", width: "100%" }}>
          <CheckoutSummaryComponent
            onBook={handleOnBook}
            numberOfBags={numberOfBags}
            isSubmitting={isSubmitting}
            isError={isError}
          />
        </div>
      </MainContainer>
    </Container>
  );
}
