import React from "react";
import "./styles.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: string;
  background?: string
  width?: number;
  disabled?: boolean;
}

const BaseButton = ({ disabled, label, onClick, size = "medium", color="ffffff", background = "#0000", width }: ButtonProps) => {
  const buttonSize = size === "small" ? "btn-small" : size === "large" ? "btn-large" : "";

  const buttonStyle = {
    color: color,
    backgroundColor: background,
    width: width ? `${width}px` : undefined,
  };

  return (
    <button disabled={disabled} className={`base_button ${buttonSize}`} style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default BaseButton;