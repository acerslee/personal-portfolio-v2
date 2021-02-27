const showNav = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index)=>{
          if(link.style.animation){
              link.style.animation = '';
          } else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9}s`
          }
      });
  });
};

export default showNav;