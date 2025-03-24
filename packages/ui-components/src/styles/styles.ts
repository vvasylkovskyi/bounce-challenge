import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { borderRadius, colorError, colorInputBorder, colorPrimary, colorPrimaryDisabled, colorSeparator, containerMargins, containerPaddings, textColor, textColorWhite } from "./styles-constants";

export const MainContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%; 
`;

export const CheckoutSummaryOuterContainer = styled.View`
    width: 100%;
`;

export const ErrorContainer = styled.View`   
    padding: ${containerPaddings};
    margin: ${containerMargins};
`;

export const ErrorContainerText = styled.Text`
    color: ${colorError};    
`;

export const CheckoutSummaryContainer = styled.View`
    margin: ${containerMargins};
    padding: ${containerPaddings};
    border-top-width: 1px;
    border-top-color: ${colorSeparator};
`;

export const CheckoutSummaryInnerContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 12px;
`;

export const GenericButtonWrapper = styled.TouchableOpacity<{ isDisabled: boolean, hasError: boolean }>`
  padding: 16px 32px;
  background-color: ${colorPrimary};
  border-radius: ${borderRadius};
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ isDisabled }) => isDisabled && `cursor: not-allowed;  background-color: ${colorPrimaryDisabled};`}
`;

export const GenericButton = styled.Text`
  cursor: pointer;
  color: ${textColorWhite};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MainContainerInnerWrapper = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const MainContainerTitleWrapper = styled.View`
    padding: ${containerPaddings};
    margin: ${containerMargins};
`

export const Subtitle = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${textColor};   
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${textColor};   
`

export const NumberOfBagsContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;
    padding: ${containerPaddings};
    margin: ${containerMargins};
`;

export const NumberOfBagsButtons = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
`;

export const NumberOfBagsSquareButton = styled.TouchableOpacity<{ isDisabled: boolean }>`
    width: 32px;
    height: 32px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${colorPrimary};
    color: ${textColorWhite};
    border-radius: ${borderRadius};
    cursor: pointer;

    ${({ isDisabled }) => isDisabled && `cursor: not-allowed;  background-color: ${colorPrimaryDisabled};`}
`;

export const NumberOfBagsSquareButtonText = styled.Text`
    font-size: 20px;
    color: ${textColorWhite};
`;

export const PersonalDetailsContainer = styled.View`
    margin: ${containerMargins};
    padding: ${containerPaddings};
    border-top-width: 1px;
    border-top-color: ${colorSeparator};
`;

export const PersonalDetailsInnerContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const PaymentInformationContainer = styled.View`
    margin: ${containerMargins};
    padding: ${containerPaddings};
    border-top-width: 1px;
    border-top-color: ${colorSeparator};
`;

export const PaymentInformationInnerContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const TextInputComponent = styled.TextInput<{ hasError: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${colorInputBorder};
  border-radius: ${borderRadius};

  &:focus {
    outline: none;
    border-color: ${colorInputBorder};
  }

  ${({ hasError }) => hasError && `border-color: ${colorError};`}
`;

export const ToggleSwitchWrapper = styled.View`
  margin: ${containerMargins};
  padding: 0;
`;

export const ToggleSwitchComponent = styled.View`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;
`

export const SwitchContainer = styled(TouchableOpacity<{ isOn: boolean }>)`
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ isOn }) => (isOn ? "#4cd964" : "#ccc")};
  justify-content: center;
  padding: 2px;
`;

export const Thumb = styled(Animated.View)`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: white;
`;
