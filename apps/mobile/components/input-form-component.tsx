"use client";

import { FormInputItemState } from "@/types/types";
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
      <div className="personal-details__container">
        <div className="personal-details__inner-container">
          <label className="font-bold">Personal Details:</label>

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
        </div>
      </div>

      <div className="payment-information__container">
        <div className="payment-information__inner-container">
          <label className="font-bold">Payment information: </label>

          <FormInput
            title="Card Details"
            value={cardDetails.value}
            onChange={setCardDetails}
            isDirty={cardDetails.isDirty}
            isValid={cardDetails.isValid}
            errorMessage={cardDetails.errorMessage}
          />
        </div>
      </div>
    </>
  );
};
