const Footer = ({title, link, icon}) => (
  <footer>
    <div id='closer'>
      <div className='socials-links'>
        <a
          className = 'socials'
          title={title}
          href= {link}>
          <i className={icon}></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;