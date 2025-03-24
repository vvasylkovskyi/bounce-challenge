import {
  GenericTextNative,
  SwitchContainerNative,
  ThumbNative,
  ToggleSwitchComponentNative,
} from "@packages/ui-components-native";
import React, { useRef } from "react";
import { Animated } from "react-native";

type ToggleSwitchProps = {
  label: string;
  onChange?: (isToggled: boolean) => void;
  isToggled: boolean;
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  onChange,
  isToggled,
}) => {
  const translateX = useRef(new Animated.Value(0)).current; // Animation state

  const toggleSwitch = () => {
    const toValue = isToggled ? 0 : 20; // Move thumb left or right
    Animated.timing(translateX, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();

    onChange?.(!isToggled);
  };

  return (
    <ToggleSwitchComponentNative>
      <GenericTextNative>{label}</GenericTextNative>
      <SwitchContainerNative
        isOn={isToggled}
        onPress={toggleSwitch}
        activeOpacity={0.8}
      >
        <ThumbNative style={{ transform: [{ translateX }] }} />
      </SwitchContainerNative>
    </ToggleSwitchComponentNative>
  );
};
