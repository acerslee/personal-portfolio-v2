// import '../../styles-nav-bar.css'

const Header = () => (
  <header id = "header">
    <nav id="navbar">
      <img id = "logo" src= "../images/brandlogo.png" alt="brand logo" />
      <ul className = "nav-list" id="toggleMenu">
        <li className="nav-link"><a href="#personal-section">About Me</a></li>
        <li className="nav-link"><a href="#projects-section">Projects</a></li>
        <li className="nav-link"><a href="#closer">Contact</a></li>
        <li className="nav-link resume">Resume</li>
      </ul>

      {/* only show once screen size reaches a certain width */}
      <div className="hamburger">
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      {/*  */}

    </nav>
  </header>
);

export default Header;