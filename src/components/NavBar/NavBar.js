import './NavBar.css';
import Logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar-container">
      <img width={'40px'} src={Logo} alt="logo" />
      <ul className="list">
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'blanco' : 'negro')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/category/pantalones'}
            className={({ isActive }) => (isActive ? 'blanco' : 'negro')}
          >
            Pantalones
          </NavLink>
        </li>

        <li>
          <NavLink
            to={'/category/gorros'}
            className={({ isActive }) => (isActive ? 'blanco' : 'negro')}
          >
            Gorros
          </NavLink>
        </li>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default NavBar;
