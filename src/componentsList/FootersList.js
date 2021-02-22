import Footer from '../components/Footer.js';

const FootersList = ({socials}) => (
  <div className = 'footer-list'>
    {socials.map(social => {
      return (
        <Footer
          key = {social.id}
          title = {social.title}
          link = {social.link}
          icon = {social.icon}
      />
      )
    })}
  </div>
);


export default FootersList;