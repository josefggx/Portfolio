import { HashLink } from 'react-router-hash-link';
import './ScrollIcon.scss';

export const ScrollIcon = () => {
  const handleClick = () => {
    setTimeout(() =>
      history.pushState(null, document.title, location.pathname)
    );
  };
  return (
    <HashLink className='mouse__container' smooth to="#about" onClick={handleClick}>
      <div className="mouse"></div>
    </HashLink>
    // <div onClick={handleClick} className="mouse"></div>
    // <div className="scroll-down">
    //   <div className="scroll-down-text">SCROLL DOWN</div>
    //   <div className="scroll-down-bar"></div>
    // </div>
  );
};