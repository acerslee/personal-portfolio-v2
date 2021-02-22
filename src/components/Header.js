const Header = () => (
  <header id = "header">
    <nav id="navbar">
      <img id = "logo" src= "/photos/brandlogo.png" alt="brand logo" />
      <ul class = "nav-list" id="toggleMenu">
        <li class="nav-link"><a href="/">About Me</a></li>
        <li class="nav-link"><a href="#projects">Projects</a></li>
        <li class="nav-link"><a href="/contact">Contact</a></li>
      </ul>
      <div class="hamburger">
        <div class="menu"></div>
        <div class="menu"></div>
        <div class="menu"></div>
      </div>
    </nav>
  </header>
);

export default Header;