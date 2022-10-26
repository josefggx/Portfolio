import './Title.scss';

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="section__title">
      {title}
      <span>.</span>
    </h1>
  );
};
