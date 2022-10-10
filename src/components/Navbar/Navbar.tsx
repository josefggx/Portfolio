import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        josefggx
      </Link>
      <div className="navbar__items">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};
