import { CheckoutSummaryContainerStyles, CheckoutSummaryInnerContainerStyles, CheckoutSummaryOuterContainerStyles, ErrorContainerStyles, ErrorContainerTextStyles, GenericButtonStyles, GenericButtonWrapperStyles, MainContainerInnerWrapperStyles, MainContainerStyles, MainContainerTitleWrapperStyles, NumberOfBagsButtonsStyles, NumberOfBagsContainerStyles, NumberOfBagsSquareButtonStyles, NumberOfBagsSquareButtonTextStyles, PaymentInformationContainerStyles, PaymentInformationInnerContainerStyles, PersonalDetailsContainerStyles, PersonalDetailsInnerContainerStyles, SubtitleStyles, SwitchContainerStyles, TextInputComponentStyles, ThumbStyles, TitleStyles, ToggleSwitchComponentStyles, ToggleSwitchWrapperStyles } from '@packages/ui-components-base-styles';
import { Animated } from "react-native";
import styled from "styled-components/native";

export const MainContainerNative = styled.View`${MainContainerStyles}`;

export const CheckoutSummaryOuterContainerNative = styled.View`${CheckoutSummaryOuterContainerStyles}`;

export const ErrorContainerNative = styled.View`${ErrorContainerStyles}`;

export const ErrorContainerTextNative = styled.Text`${ErrorContainerTextStyles}`;

export const CheckoutSummaryContainerNative = styled.View`${CheckoutSummaryContainerStyles}`;

export const CheckoutSummaryInnerContainerNative = styled.View`${CheckoutSummaryInnerContainerStyles}`;

export const GenericButtonWrapperNative = styled.TouchableOpacity<{ isDisabled: boolean }>`${GenericButtonWrapperStyles}`;

export const GenericButtonNative = styled.Text`${GenericButtonStyles}`;

export const MainContainerInnerWrapperNative = styled.View`${MainContainerInnerWrapperStyles}`;

export const MainContainerTitleWrapperNative = styled.View`${MainContainerTitleWrapperStyles}`;

export const SubtitleNative = styled.Text`${SubtitleStyles}`;

export const TitleNative = styled.Text`${TitleStyles}`;

export const NumberOfBagsContainerNative = styled.View`${NumberOfBagsContainerStyles}`;

export const NumberOfBagsButtonsNative = styled.View`${NumberOfBagsButtonsStyles}`;

export const NumberOfBagsSquareButtonNative = styled.TouchableOpacity<{ isDisabled: boolean }>`${NumberOfBagsSquareButtonStyles}`;

export const NumberOfBagsSquareButtonTextNative = styled.Text`${NumberOfBagsSquareButtonTextStyles}`;

export const PersonalDetailsContainerNative = styled.View`${PersonalDetailsContainerStyles}`;

export const PersonalDetailsInnerContainerNative = styled.View`${PersonalDetailsInnerContainerStyles}`;

export const PaymentInformationContainerNative = styled.View`${PaymentInformationContainerStyles}`;

export const PaymentInformationInnerContainerNative = styled.View`${PaymentInformationInnerContainerStyles}`;

export const TextInputComponentNative = styled.TextInput<{ hasError: boolean }>`${TextInputComponentStyles}`;

export const ToggleSwitchWrapperNative = styled.View`${ToggleSwitchWrapperStyles}`;

export const ToggleSwitchComponentNative = styled.View`${ToggleSwitchComponentStyles}`

export const SwitchContainerNative = styled.TouchableOpacity<{ isOn: boolean }>`${SwitchContainerStyles}`;

export const ThumbNative = styled(Animated.View)`${ThumbStyles}`;

export const GenericViewNative = styled.View``;
export const GenericTextNative = styled.Text``;