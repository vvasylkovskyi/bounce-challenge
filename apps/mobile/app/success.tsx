import {
  CheckmarkContainer,
  CheckmarkSvg,
  CheckmarkSvgCircle,
  CheckmarkSvgPath,
  GenericButtonNative,
  GenericButtonWrapperNative,
  MainContainerSuccessNative,
  SuccessContainerTitleWrapperNative,
  SuccessSubtitleNative,
  SuccessTitleNative,
} from "@packages/ui-components-native";

import { router } from "expo-router";

export default function Index() {
  return (
    <MainContainerSuccessNative>
      <CheckmarkContainer>
        <CheckmarkSvg>
          <CheckmarkSvgCircle />
          <CheckmarkSvgPath />
        </CheckmarkSvg>
      </CheckmarkContainer>

      <SuccessContainerTitleWrapperNative>
        <SuccessTitleNative style={{ textAlign: "center" }}>
          Success! Your Booking Has Been Successfully Placed
        </SuccessTitleNative>
        <SuccessSubtitleNative style={{ marginTop: 8, textAlign: "center" }}>
          You can return to the homepage and start again anytime.
        </SuccessSubtitleNative>
        <GenericButtonWrapperNative
          style={{ marginTop: 16 }}
          onPress={() => router.back()}
          isDisabled={false}
        >
          <GenericButtonNative>Return to Homepage</GenericButtonNative>
        </GenericButtonWrapperNative>
      </SuccessContainerTitleWrapperNative>
    </MainContainerSuccessNative>
  );
}
