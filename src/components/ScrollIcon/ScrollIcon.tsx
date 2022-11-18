import { HashLink } from 'react-router-hash-link';
import './ScrollIcon.scss';

export const ScrollIcon = () => {
  const handleClick = () => {
    setTimeout(() =>
      history.pushState(null, document.title, location.pathname)
    );
  };
  return (
    <HashLink
      className="mouse__container"
      smooth
      to="#about"
      onClick={handleClick}
    >
      <div
        data-aos="fade-up"
        data-aos-delay="1200"
        data-aos-once
        data-aos-offset='-300'
        className="mouse"
      ></div>
    </HashLink>
  );
};
