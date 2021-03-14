// import '../../styles-nav-bar.css'
import showNav from '../javascript/query.js';

const Header = () => (
  <header id = "header">
    <nav id="navbar">
      <img id = "logo" src= "../images/alex-lee-logo.png" alt="brand logo" />
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