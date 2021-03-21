const PersonalSection = () => (
  <div id = "personal-section">
    <div className = "biography">
      <img id = "portrait" src= "../images/portfolio_bw.png" alt="brand logo" />
      <div className = "about_me">
        <p>I previously came from an Operations & Project Management background. Technology has always been an interest and I wanted to find a way to be creative and build new things! See my growth as a software engineer below.</p>
        <h2>Experienced, or learning the following:</h2>
        <ul className = "language_list">
          <li>HTML5 & CSS3</li>
          <li>JavaScript (Vanilla, ES6, jQuery)</li>
          <li>Node.js and Express</li>
          <li>SQL</li>
          <li>MongoDB (Mongoose)</li>
          <li>React (Hooks, Jest)</li>
        </ul>
      </div>
    </div>
  </div>
);

export default PersonalSection;