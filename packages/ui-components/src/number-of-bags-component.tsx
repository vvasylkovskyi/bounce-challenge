import { Text, View } from "react-native";
import {
  NumberOfBagsButtons,
  NumberOfBagsContainer,
  NumberOfBagsSquareButton,
  NumberOfBagsSquareButtonText,
} from "./styles/styles";

export const NumberOfBagsComponent = ({
  numberOfBags,
  setNumberOfBags,
}: {
  numberOfBags: number;
  setNumberOfBags: (numberOfBags: number) => void;
}) => {
  return (
    <NumberOfBagsContainer>
      <View>
        <Text>Number of bags: </Text>
      </View>
      <NumberOfBagsButtons>
        <NumberOfBagsSquareButton
          onPress={() => setNumberOfBags(Math.max(1, numberOfBags - 1))}
          isDisabled={numberOfBags === 1}
        >
          <NumberOfBagsSquareButtonText>-</NumberOfBagsSquareButtonText>
        </NumberOfBagsSquareButton>
        <Text>{numberOfBags}</Text>
        <NumberOfBagsSquareButton
          onPress={() => setNumberOfBags(numberOfBags + 1)}
        >
          <NumberOfBagsSquareButtonText>+</NumberOfBagsSquareButtonText>
        </NumberOfBagsSquareButton>
      </NumberOfBagsButtons>
    </NumberOfBagsContainer>
  );
};
