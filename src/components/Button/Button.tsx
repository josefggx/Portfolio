import { MouseEventHandler } from 'react';
import './Button.scss';

interface ButtonProps {
  text: String;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="btn">
      <span>{text}</span>
    </button>
  );
};
