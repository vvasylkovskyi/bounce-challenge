import { useTotalPrice } from "@packages/hooks/useTotalPrice";
import {
  CheckoutSummaryContainerNative,
  CheckoutSummaryInnerContainerNative,
  CheckoutSummaryOuterContainerNative,
  ErrorContainerNative,
  ErrorContainerTextNative,
  GenericButtonNative,
  GenericButtonWrapperNative,
} from "@packages/ui-components-native";
import { useEffect, useState } from "react";
import { View } from "react-native";

function toDecimalString(num: number): string {
  return (num / 100).toFixed(2).replace(".", ",");
}

type CheckoutSummaryComponentProps = {
  onBook: () => void;
  numberOfBags: number;
  isSubmitting: boolean;
  isError: boolean;
};

export const CheckoutSummaryComponent = ({
  onBook,
  numberOfBags,
  isSubmitting,
  isError,
}: CheckoutSummaryComponentProps) => {
  const { data, isLoading, errorDetail } = useTotalPrice(numberOfBags);
  const [totalPriceStr, setTotalPriceStr] = useState<string | null>("0,00");

  useEffect(() => {
    if (isLoading || !data?.total) {
      return;
    }

    setTotalPriceStr(toDecimalString(data.total));
  }, [data, isLoading]);

  const numberOfBagsLabel = `${numberOfBags} ${
    numberOfBags === 1 ? "bag" : "bags"
  }`;

  let buttonContent: React.ReactNode = `Book ${numberOfBagsLabel} $${totalPriceStr}`;
  if (Boolean(errorDetail)) {
    buttonContent = errorDetail || "";
  }

  if (isLoading) {
    buttonContent = "Loading...";
  }

  if (isSubmitting) {
    buttonContent = "Placing Booking...";
  }

  if (isError) {
    buttonContent = `Book ${numberOfBagsLabel} $${totalPriceStr}. Retry`;
  }

  let errorMessage = null;
  if (errorDetail) {
    errorMessage = `${errorDetail} Please change the number of bags and try again`;
  }

  if (isError) {
    errorMessage = "Your booking has failed. Please try again";
  }

  return (
    <CheckoutSummaryOuterContainerNative>
      {errorMessage && (
        <ErrorContainerNative>
          <ErrorContainerTextNative>{errorMessage}</ErrorContainerTextNative>
        </ErrorContainerNative>
      )}

      <CheckoutSummaryContainerNative>
        <CheckoutSummaryInnerContainerNative>
          <View style={{ width: "100%", marginBottom: 16 }}>
            <GenericButtonWrapperNative
              onPress={onBook}
              isDisabled={isLoading || Boolean(errorDetail) || isSubmitting}
            >
              <GenericButtonNative>{buttonContent}</GenericButtonNative>
            </GenericButtonWrapperNative>
          </View>
        </CheckoutSummaryInnerContainerNative>
      </CheckoutSummaryContainerNative>
    </CheckoutSummaryOuterContainerNative>
  );
};
