import {
  GenericTextWeb,
  GenericViewWeb,
  NumberOfBagsButtonsWeb,
  NumberOfBagsContainerWeb,
  NumberOfBagsSquareButtonTextWeb,
  NumberOfBagsSquareButtonWeb,
} from "@packages/ui-components-web";

export const NumberOfBagsComponent = ({
  numberOfBags,
  setNumberOfBags,
}: {
  numberOfBags: number;
  setNumberOfBags: (numberOfBags: number) => void;
}) => {
  return (
    <NumberOfBagsContainerWeb>
      <GenericViewWeb>
        <GenericTextWeb>Number of bags: </GenericTextWeb>
      </GenericViewWeb>
      <NumberOfBagsButtonsWeb>
        <NumberOfBagsSquareButtonWeb
          onClick={() => setNumberOfBags(Math.max(1, numberOfBags - 1))}
          isDisabled={numberOfBags === 1}
        >
          <NumberOfBagsSquareButtonTextWeb>-</NumberOfBagsSquareButtonTextWeb>
        </NumberOfBagsSquareButtonWeb>
        <GenericTextWeb>{numberOfBags}</GenericTextWeb>
        <NumberOfBagsSquareButtonWeb
          onClick={() => setNumberOfBags(numberOfBags + 1)}
          isDisabled={false}
        >
          <NumberOfBagsSquareButtonTextWeb>+</NumberOfBagsSquareButtonTextWeb>
        </NumberOfBagsSquareButtonWeb>
      </NumberOfBagsButtonsWeb>
    </NumberOfBagsContainerWeb>
  );
};
