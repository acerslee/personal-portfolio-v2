const Footer = ({title, link, icon}) => (
  <footer>
    <div id='closer'>
      <div class='socials-links'>
        <a class = 'socials' title={title} href= {link}><i class={icon}></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;