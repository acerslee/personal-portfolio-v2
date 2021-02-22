// import '../../styles-nav-bar.css'

const Header = () => (
  <header id = "header">
    <nav id="navbar">
      <img id = "logo" src= "../images/brandlogo.png" alt="brand logo" />
      <ul className = "nav-list" id="toggleMenu">
        <li className="nav-link"><a href="/">About Me</a></li>
        <li className="nav-link"><a href="#projects">Projects</a></li>
        <li className="nav-link"><a href="/contact">Contact</a></li>
      </ul>
      <div className="hamburger">
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
    </nav>
  </header>
);

export default Header;