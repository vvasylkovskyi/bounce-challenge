import { css } from 'styled-components';
import { borderRadius, colorError, colorInputBorder, colorPrimary, colorPrimaryDisabled, colorSeparator, containerMargins, containerPaddings, textColor, textColorWhite } from "./styles-constants";

export const MainContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%; 
`;

export const CheckoutSummaryOuterContainerStyles = css`
    width: 100%;
`;

export const ErrorContainerStyles = css`   
    padding: ${containerPaddings};
    margin: ${containerMargins};
`;

export const ErrorContainerTextStyles = css`
    color: ${colorError};    
`;

export const CheckoutSummaryContainerStyles = css`
    margin: ${containerMargins};
    padding: ${containerPaddings};
    border-top-width: 1px;
    border-top-color: ${colorSeparator};
`;

export const CheckoutSummaryInnerContainerStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 12px;
`;

export const GenericButtonWrapperStyles = css<{ isDisabled: boolean }>`
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

export const GenericButtonStyles = css`
  cursor: pointer;
  color: ${textColorWhite};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MainContainerInnerWrapperStyles = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const MainContainerTitleWrapperStyles = css`
    padding: ${containerPaddings};
    margin: ${containerMargins};
`

export const SubtitleStyles = css`
    font-size: 16px;
    font-weight: 600;
    color: ${textColor};   
`

export const TitleStyles = css`
    font-size: 24px;
    font-weight: 600;
    color: ${textColor};   
`

export const NumberOfBagsContainerStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;
    padding: ${containerPaddings};
    margin: ${containerMargins};
`;

export const NumberOfBagsButtonsStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
`;

export const NumberOfBagsSquareButtonStyles = css<{ isDisabled: boolean }>`
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

export const NumberOfBagsSquareButtonTextStyles = css`
    font-size: 20px;
    color: ${textColorWhite};
`;

export const PersonalDetailsContainerStyles = css`
    margin: ${containerMargins};
    padding: ${containerPaddings};
    border-top-width: 1px;
    border-top-color: ${colorSeparator};
`;

export const PersonalDetailsInnerContainerStyles = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const PaymentInformationContainerStyles = css`
    margin: ${containerMargins};
    padding: ${containerPaddings};
    border-top-width: 1px;
    border-top-color: ${colorSeparator};
`;

export const PaymentInformationInnerContainerStyles = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const TextInputComponentStyles = css<{ hasError: boolean }>`
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

export const ToggleSwitchWrapperStyles = css`
  margin: ${containerMargins};
  padding: 0;
`;

export const ToggleSwitchComponentStyles = css`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;
`

export const SwitchContainerStyles = css`
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ isOn }) => (isOn ? "#4cd964" : "#ccc")};
  justify-content: center;
  padding: 2px;
`;

export const ThumbStyles = css`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: white;
`;

export const SuccessSubtitleStyles = css`
    font-size: 16px;
    color: ${textColor};   
`;

export const SuccessTitleStyles = css`
    font-size: 24px;
    font-weight: 600;
    color: ${textColor};   
`;

export const SuccessContainerTitleWrapperStyles = css`
    display: flex;
    align-items: center;    
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: ${containerPaddings};
    margin: ${containerMargins};
`;

export const MainContainerSuccessStyles = css`
    display: flex;
    align-items: center;    
    justify-content: center;
    flex-direction: column;
    flex: 1;
    padding-top: 0;
    width: 100%;
`;