"use client";

import { FormInputItemState } from "@packages/types";
import {
  GenericTextNative,
  PaymentInformationContainerNative,
  PaymentInformationInnerContainerNative,
  PersonalDetailsContainerNative,
  PersonalDetailsInnerContainerNative,
} from "@packages/ui-components-native";
import { FormInput } from "./form-input";

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
      <PersonalDetailsContainerNative>
        <PersonalDetailsInnerContainerNative>
          <GenericTextNative style={{ fontWeight: "600" }}>
            Personal Details:
          </GenericTextNative>
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
        </PersonalDetailsInnerContainerNative>
      </PersonalDetailsContainerNative>
      <PaymentInformationContainerNative>
        <PaymentInformationInnerContainerNative>
          <GenericTextNative style={{ fontWeight: "600" }}>
            Payment information:
          </GenericTextNative>
          <FormInput
            title="Card Details"
            value={cardDetails.value}
            onChange={setCardDetails}
            isDirty={cardDetails.isDirty}
            isValid={cardDetails.isValid}
            errorMessage={cardDetails.errorMessage}
          />
        </PaymentInformationInnerContainerNative>
      </PaymentInformationContainerNative>
    </>
  );
};
