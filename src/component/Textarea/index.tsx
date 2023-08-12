import { FunctionComponent } from "react";

import { Input } from "antd";

const { TextArea } = Input;

interface IProp {
  name: string;
  value: string | number;
  placeholder: string;
  className?: string;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  style?: object;
}

const InputArea: FunctionComponent<IProp> = ({
  name,
  value,
  placeholder,
  className,
  onBlur,
  onChange,
  style,
}) => {
  return (
    <TextArea
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onBlur={onBlur}
      onChange={onChange}
      style={style}
    />
  );
};

export default InputArea;