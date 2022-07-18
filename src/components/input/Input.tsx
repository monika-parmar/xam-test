import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: FC<InputProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <input
      className={`input ${className ?? ''}`}
      {...restProps}
    />
  );
};

export default Input;
