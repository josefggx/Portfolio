import './Button.scss';

interface ButtonProps {
  text: String;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="btn">
      <span>{text}</span>
    </button>
  );
};
