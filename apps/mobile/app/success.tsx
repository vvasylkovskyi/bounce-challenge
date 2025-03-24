import {
  GenericButton,
  GenericButtonWrapper,
  MainContainerSuccess,
  SuccessContainerTitleWrapper,
  SuccessSubtitle,
  SuccessTitle,
} from "@packages/ui-components";
import {
  CheckmarkContainer,
  CheckmarkSvg,
  CheckmarkSvgCircle,
  CheckmarkSvgPath,
} from "@packages/ui-components/src/styles/checkmark-svg";

import { router } from "expo-router";

export default function Success() {
  return (
    <MainContainerSuccess>
      <CheckmarkContainer>
        <CheckmarkSvg>
          <CheckmarkSvgCircle />
          <CheckmarkSvgPath />
        </CheckmarkSvg>
      </CheckmarkContainer>

      <SuccessContainerTitleWrapper>
        <SuccessTitle style={{ textAlign: "center" }}>
          Success! Your Booking Has Been Successfully Placed
        </SuccessTitle>
        <SuccessSubtitle style={{ marginTop: 8, textAlign: "center" }}>
          You can return to the homepage and start again anytime.
        </SuccessSubtitle>
        <GenericButtonWrapper
          style={{ marginTop: 16 }}
          onPress={() => router.back()}
        >
          <GenericButton>Return to Homepage</GenericButton>
        </GenericButtonWrapper>
      </SuccessContainerTitleWrapper>
    </MainContainerSuccess>
  );
}
