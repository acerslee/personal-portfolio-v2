const Project = () => (
  <div id = "projects-section">
    <h2 class = "project-headline">Here are some projects that I've worked on.</h2>
      <div class = "projects">
        <div class = "project-content">
          <h3 class = "project-heading">Twiddler</h3>
          <p>This is a project that I've worked on the Front-End Development for a precourse assignment at bootcamp.</p>
          <ul class = "coding-list">
            <li class = "languages">JavaScript</li>
            <li class = "languages">jQuery</li>
          </ul>
          {/* <a class = "project-links" title="Github" href="https://github.com/acerslee/personal-portfolio" target="_blank"><i class="fab fa-github"></i></a> */}
        </div>
        <img class = "project-images" src  = "/photos/projects/twiddler.png" alt="twiddler" />
      </div>
  </div>
);

export default Project;