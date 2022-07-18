import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType: 'primary' | 'secondary',
    buttonText: string,
    className?: string
}

const Button: FC<ButtonProps> = (props) => {
  const { className, buttonText, buttonType, ...restProps } = props;
  return (
    <button
      className={`button ${className ?? ''} ${buttonType}-button`}
      {...restProps}
    >
      {buttonText}
    </button>
  );
};

export default Button;
