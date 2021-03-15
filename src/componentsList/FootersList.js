import Footer from '../components/Footer.js';
import {socials} from '../data/portfolioData.js';

const date = new Date().getFullYear();

const FootersList = () => (
  <div id = 'closer'>
    <h1>Check out my socials below!</h1>
    <p>Always in the mood to chat about coding, photography, or even coffee.</p>
    <div className = 'socials-links'>
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
    <p className='copyright'>©{date} Designed and Built by Alex Lee</p>
  </div>
);

export default FootersList;