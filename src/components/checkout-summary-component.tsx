import { useTotalPrice } from "@/hooks/useTotalPrice";
import { useEffect, useState } from "react";

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
    buttonContent = errorDetail;
  }

  if (isLoading) {
    buttonContent = <span className="spinner"></span>;
  }

  if (isSubmitting) {
    buttonContent = (
      <div>
        Placing Booking... <span className="spinner"></span>
      </div>
    );
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
    <div className="checkout-summary__outer-container">
      {errorMessage && (
        <div className="error-container error-text">{errorMessage}</div>
      )}
      <div className="checkout-summary__container">
        <div className="checkout-summary__inner-container">
          <div className="w-full">
            <button
              className={`generic-button w-full`}
              onClick={onBook}
              disabled={isLoading || Boolean(errorDetail) || isSubmitting}
            >
              {buttonContent}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
