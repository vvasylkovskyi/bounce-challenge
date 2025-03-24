"use client";

import { FormInputItemState } from "@packages/types";
import {
  GenericTextWeb,
  PaymentInformationContainerWeb,
  PaymentInformationInnerContainerWeb,
  PersonalDetailsContainerWeb,
  PersonalDetailsInnerContainerWeb,
} from "@packages/ui-components-web";
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
      <PersonalDetailsContainerWeb>
        <PersonalDetailsInnerContainerWeb>
          <GenericTextWeb style={{ fontWeight: "600" }}>
            Personal Details:
          </GenericTextWeb>
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
        </PersonalDetailsInnerContainerWeb>
      </PersonalDetailsContainerWeb>
      <PaymentInformationContainerWeb>
        <PaymentInformationInnerContainerWeb>
          <GenericTextWeb style={{ fontWeight: "600" }}>
            Payment information:
          </GenericTextWeb>
          <FormInput
            title="Card Details"
            value={cardDetails.value}
            onChange={setCardDetails}
            isDirty={cardDetails.isDirty}
            isValid={cardDetails.isValid}
            errorMessage={cardDetails.errorMessage}
          />
        </PaymentInformationInnerContainerWeb>
      </PaymentInformationContainerWeb>
    </>
  );
};
