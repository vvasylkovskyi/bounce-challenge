"use client";

import { FormInputItemState } from "@packages/types";
import { Text } from "react-native";
import { FormInput } from "./form-input";
import {
  PaymentInformationContainer,
  PaymentInformationInnerContainer,
  PersonalDetailsContainer,
  PersonalDetailsInnerContainer,
} from "./styles/styles";

type InputFormComponentProps = {
  name: FormInputItemState;
  setName: (name: string) => void;
  email: FormInputItemState;
  setEmail: (email: string) => void;
  cardDetails: FormInputItemState;
  setCardDetails: (cardDetails: string) => void;
};

export const InputFormComponent = ({
  name,
  setName,
  email,
  setEmail,
  cardDetails,
  setCardDetails,
}: InputFormComponentProps) => {
  return (
    <>
      <PersonalDetailsContainer>
        <PersonalDetailsInnerContainer>
          <Text style={{ fontWeight: "600" }}>Personal Details:</Text>
          <FormInput
            title="Name"
            value={name.value}
            onChange={setName}
            isDirty={name.isDirty}
            isValid={name.isValid}
            errorMessage={name.errorMessage}
          />

          <FormInput
            title="Email"
            value={email.value}
            onChange={setEmail}
            isDirty={email.isDirty}
            isValid={email.isValid}
            errorMessage={email.errorMessage}
          />
        </PersonalDetailsInnerContainer>
      </PersonalDetailsContainer>
      <PaymentInformationContainer>
        <PaymentInformationInnerContainer>
          <Text style={{ fontWeight: "600" }}>Payment information:</Text>
          <FormInput
            title="Card Details"
            value={cardDetails.value}
            onChange={setCardDetails}
            isDirty={cardDetails.isDirty}
            isValid={cardDetails.isValid}
            errorMessage={cardDetails.errorMessage}
          />
        </PaymentInformationInnerContainer>
      </PaymentInformationContainer>
    </>
  );
};
