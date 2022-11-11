import { MouseEventHandler } from 'react';
import './Button.scss';

interface ButtonProps {
  text: String;
  type?: 'submit';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button type={type ? 'submit' : 'button'} onClick={onClick} className="btn">
      <span>{text}</span>
    </button>
  );
};
