import { FunctionComponent, ReactNode } from "react";

import { Button as CustomButton } from "antd";

type ButtonSize = "small" | "large";

type ButtonType = "primary" | "default" | "ghost";

type ButtonHtmlType = "button" | "submit";

type ButtonShape = "default" | "round";

interface IProp {
  type: ButtonType;
  htmlType: ButtonHtmlType;
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  disabled?: boolean;
  onClick?: (e: any) => void;
}

const Button: FunctionComponent<IProp> = ({
  type,
  htmlType,
  children,
  className,
  size,
  shape,
  disabled,
  onClick,
}) => {
  return (
    <CustomButton
      type={type}
      htmlType={htmlType}
      className={className}
      size={size}
      shape={shape}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
