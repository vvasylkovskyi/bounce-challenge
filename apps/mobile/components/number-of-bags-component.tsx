import {
  GenericTextNative,
  GenericViewNative,
  NumberOfBagsButtonsNative,
  NumberOfBagsContainerNative,
  NumberOfBagsSquareButtonNative,
  NumberOfBagsSquareButtonTextNative,
} from "@packages/ui-components-native";

export const NumberOfBagsComponent = ({
  numberOfBags,
  setNumberOfBags,
}: {
  numberOfBags: number;
  setNumberOfBags: (numberOfBags: number) => void;
}) => {
  return (
    <NumberOfBagsContainerNative>
      <GenericViewNative>
        <GenericTextNative>Number of bags: </GenericTextNative>
      </GenericViewNative>
      <NumberOfBagsButtonsNative>
        <NumberOfBagsSquareButtonNative
          onPress={() => setNumberOfBags(Math.max(1, numberOfBags - 1))}
          isDisabled={numberOfBags === 1}
        >
          <NumberOfBagsSquareButtonTextNative>
            -
          </NumberOfBagsSquareButtonTextNative>
        </NumberOfBagsSquareButtonNative>
        <GenericTextNative>{numberOfBags}</GenericTextNative>
        <NumberOfBagsSquareButtonNative
          onPress={() => setNumberOfBags(numberOfBags + 1)}
          isDisabled={false}
        >
          <NumberOfBagsSquareButtonTextNative>
            +
          </NumberOfBagsSquareButtonTextNative>
        </NumberOfBagsSquareButtonNative>
      </NumberOfBagsButtonsNative>
    </NumberOfBagsContainerNative>
  );
};
