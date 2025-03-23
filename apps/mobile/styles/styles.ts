import styled from "styled-components/native";

const background = '#ffffff';
const foreground = '#171717';
const colorPrimary = '#649dff';
const colorPrimaryDisabled = '#b2ceff';
const colorSeparator = '#e6e6e6';
const colorInputBorder = '#ebebeb';
const textColor = '#101929';
const textColorWhite = '#ffffff';
const colorError = '#ff3a3a';
const colorSuccess = '#4caf50';
const borderRadius = '4px';
const containerPaddings = '1rem 0';
const containerMargins = '0 2rem';
const contentPaddingTop = '100px';

export const CheckoutSummaryOuterContainer = styled.View`
    width: 100%;
`;

export const ErrorContainerText = styled.Text`
    padding: ${containerPaddings};
    margin: ${containerMargins};
    color: ${colorError};
`;

export const CheckoutSummaryContainer = styled.View`
    margin: ${containerMargins};
    padding: ${containerPaddings};
    border-top: 1px solid ${colorSeparator};
`;

export const CheckoutSummaryInnerContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`;