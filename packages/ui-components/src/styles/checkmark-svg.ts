
import Svg, { Circle, Path } from "react-native-svg";
import styled from "styled-components/native";
import { background, colorSuccess } from "./styles-constants";

export const CheckmarkContainer = styled.View`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 20px; 
`;

export const CheckmarkSvg = styled(Svg)`
      width: 50px;
      height: 50px;
`;

export const CheckmarkSvgCircle = styled(Circle).attrs(() => ({
    cx: 26,
    cy: 26,
    r: 22
}))`
    fill: ${colorSuccess};
    stroke: ${colorSuccess};
    stroke-width: 3;
`;

export const CheckmarkSvgPath = styled(Path).attrs(() => ({
    d: "M16 26l6 6 14-14"
}))`
    fill: none;
    stroke: ${background};
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 40, 0;
`;
