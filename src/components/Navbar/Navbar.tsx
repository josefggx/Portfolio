import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHashChange = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    setTimeout(() =>
      history.pushState(null, document.title, location.pathname)
    );
  };

  return (
    <nav data-aos="fade-down" data-aos-delay="200" className="navbar">
      <HashLink
        smooth
        to="#home"
        className="navbar__logo"
        onClick={handleHashChange}
      >
        <div className="navbar__logoborder">
          <div className="navbar__logo">
            <div className="logo__text">JG</div>
          </div>
        </div>
      </HashLink>
      <div className={`navbar__items ${isOpen && 'open'}`}>
        <HashLink smooth to="#about" onClick={handleHashChange}>
          About
        </HashLink>
        <HashLink smooth to="#work" onClick={handleHashChange}>
          Work
        </HashLink>
        <HashLink smooth to="#contact" onClick={handleHashChange}>
          Contact
        </HashLink>
      </div>
      <div
        className={`navbar__toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="toggle__bar"></div>
      </div>
    </nav>
  );
};
