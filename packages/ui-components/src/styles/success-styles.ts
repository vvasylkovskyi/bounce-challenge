import styled from "styled-components/native";
import { containerMargins, containerPaddings, textColor } from "./styles-constants";

export const MainContainerSuccess = styled.View`
    display: flex;
    align-items: center;    
    justify-content: center;
    flex-direction: column;
    flex: 1;
    padding-top: 0;
    width: 100%;
`;

export const SuccessContainerTitleWrapper = styled.View`
    display: flex;
    align-items: center;    
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: ${containerPaddings};
    margin: ${containerMargins};
`;

export const SuccessTitle = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${textColor};   
`;

export const SuccessSubtitle = styled.Text`
    font-size: 16px;
    color: ${textColor};   
`;