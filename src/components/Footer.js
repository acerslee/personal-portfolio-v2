const Footer = ({title, link, icon}) => (
  <a
    className = 'socials'
    title={title}
    href= {link}
    rel="noreferrer"
    target = "_blank">
    <i className={icon}></i>
  </a>
);

export default Footer;