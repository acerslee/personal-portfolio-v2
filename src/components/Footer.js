const Footer = ({title, link, icon}) => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div id='closer'>
        <h1>Check out my socials below!</h1>
        <p>Always in the mood to chat about codes, photography, or even just getting some coffee.</p>
        <div class='socials-links'>
          <a class = 'socials' title={title} href= {link}><i class={icon}></i></a>
          {/* <a class = 'socials' title='LinkedIn' href='https://www.linkedin.com/in/alexander-lee-35351374/' target='_blank'><i class='fab fa-linkedin fa-5x'></i></a>
          <a class = 'socials' title='Medium' href='https://acerslee.medium.com' target='_blank'><i class='fab fa-medium fa-5x'></i></a>
          <a class = 'socials' title='E-Mail' href='mailto:ahjlee712@gmail.com'><i class='fas fa-envelope fa-5x'></i></a> */}
        </div>
        <p class='copyright'>©{date} Designed and Built by Alex Lee</p>
      </div>
    </footer>
  )
};

export default Footer;