import showNav from '../javascript/query.js';
import {Link} from 'react-router-dom';

const Header = () => (
  <header id = "header">
    <nav id="navbar">
      <Link to = '/'>
        <img id = "logo" src= "../images/alex-lee-logo.png" alt="brand logo" />
      </Link>
      <ul className = "nav-list" id="toggleMenu">
        <li className="nav-link"><a href="#personal-section">About Me</a></li>
        <li className="nav-link"><a href="#projects-section">Projects</a></li>
        <li className="nav-link"><a href="#closer">Contact</a></li>
        <li className="nav-link resume"><a href="../static/Alexander_Lee_Resume.pdf" download="Alexander_Lee_Resume.pdf">Resume</a></li>
      </ul>

      {/* only show once screen size reaches a certain width */}
      <div className="hamburger" onClick = {() => {showNav()}}>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      {/*  */}

    </nav>
  </header>
);

export default Header;