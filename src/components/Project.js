const Project = () => (
  <div id = "projects-section">
    <h2 className = "project-headline">Here are some projects that I've worked on!</h2>
      <div className = "projects">
        <div className = "project-content">
          <h3 className = "project-heading">Twiddler</h3>
          <p>This is a project that I've worked on the Front-End Development for a precourse assignment at bootcamp.</p>
          <ul className = "coding-list">
            <li className = "languages">JavaScript</li>
            <li className = "languages">jQuery</li>
          </ul>
          {/* <a className = "project-links" title="Github" href="https://github.com/acerslee/personal-portfolio" target="_blank"><i className="fab fa-github"></i></a> */}
        </div>
        <img className = "project-images" src  = "/photos/projects/twiddler.png" alt="twiddler" />
      </div>
  </div>
);

export default Project;