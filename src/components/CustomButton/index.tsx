import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IconProps } from '@material-ui/core/Icon';

interface Props extends ButtonProps {
  isLoading?: boolean;
  startIcon?: React.ReactElement<IconProps>;
  endIcon?: React.ReactElement<IconProps>;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  color?: ButtonProps['color']; // change the type of the color prop
  type?: 'button' | 'submit' | 'reset'; // add type prop
  disabledBackgroundColor?: string;
}

const CustomButton: React.FC<Props> = ({
  children,
  isLoading = false,
  startIcon,
  endIcon,
  onClick,
  width,
  height,
  size = 'medium',
  disabled,
  variant = 'contained',
  type = 'button', // set default value for type prop
  color,
  className,
  backgroundColor,
  textColor,
  disabledBackgroundColor = '#CCCCCC', // set default value for disabledBackgroundColor prop
  ...rest
}) => {
  const buttonStyle = {
    width,
    height,
    color: textColor,
    backgroundColor: isLoading ||disabled ? disabledBackgroundColor : backgroundColor
  };

  return (
    <Button
      variant={variant}
      color={color}
      disabled={disabled || isLoading}
      onClick={onClick}
      style={buttonStyle}
      size={size}
      type={type}
       // pass type prop to Button component
      {...rest}
      startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : startIcon}
      endIcon={endIcon}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CustomButton;