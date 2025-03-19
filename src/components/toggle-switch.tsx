import React from "react";

type ToggleSwitchProps = {
  label: string;
  onChange?: (isToggled: boolean) => void;
  isToggled: boolean;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  onChange,
  isToggled,
}) => {
  return (
    <div className="toggle-switch">
      <span>{label}</span>
      <div
        className={`toggle ${isToggled ? "active" : ""}`}
        onClick={() => onChange?.(!isToggled)}
      >
        <div className="toggle-thumb"></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
