import { FunctionComponent, ReactElement } from "react";

import { Input as CustomInput } from "antd";

interface IProp {
  type: string;
  name: string;
  value: string | number;
  placeholder: string;
  className?: string;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  prefix: ReactElement;
  iconRender?: any;
  style?: object;
}

const Input: FunctionComponent<IProp> = ({
  type,
  name,
  value,
  placeholder,
  className,
  onBlur,
  onChange,
  prefix,
  iconRender,
  style,
}) => {
  if (type === "password") {
    return (
      <CustomInput.Password
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onBlur={onBlur}
        onChange={onChange}
        prefix={prefix}
        iconRender={iconRender}
        style={style}
      />
    );
  }

  return (
    <CustomInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onBlur={onBlur}
      onChange={onChange}
      prefix={prefix}
      style={style}
    />
  );
};

export default Input;