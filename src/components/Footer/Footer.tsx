import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className="footer__links">
        <a href="http://www.github.com" target="_blank">
          <span>
            <i className="fa-brands fa-github"></i>
          </span>
        </a>
        <a href="http://www.linkedin.com" target="_blank">
          <span>
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
        </a>
        <a href="http://www.linkedin.com" target="_blank">
          <span>
            <i className="fa-regular fa-envelope"></i>
          </span>
        </a>
        <a href="http://www.linkedin.com" target="_blank">
          <span>
            <i className="fa-regular fa-note-sticky"></i>
          </span>
        </a>
      </div>
      <p id="footer-text">José Gutiérrez @2022</p>
    </footer>
  );
};

