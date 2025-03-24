import React, { useRef } from "react";
import { Animated, Text } from "react-native";
import { SwitchContainer, Thumb, ToggleSwitchComponent } from "./styles/styles";

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
    <ToggleSwitchComponent>
      <Text>{label}</Text>
      <SwitchContainer
        isOn={isToggled}
        onPress={toggleSwitch}
        activeOpacity={0.8}
      >
        <Thumb style={{ transform: [{ translateX }] }} />
      </SwitchContainer>
    </ToggleSwitchComponent>
  );
};

export default ToggleSwitch;
