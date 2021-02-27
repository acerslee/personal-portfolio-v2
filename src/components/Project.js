const Project = ({heading, description, link, img_link}) => (
  <div className = "project-content">
    <h3 className = "project-heading">{heading}</h3>
    <p>{description}</p>
    <ul className = "coding-list">
      <li className = "languages">JavaScript</li>
      <li className = "languages">jQuery</li>
    </ul>
    <a className = "project-links" rel = 'noreferrer' title="Github" href={link} target="_blank"><i className="fab fa-github"></i></a>
    <img className = "project-images" src  = {img_link} alt={heading} />
  </div>
);

export default Project;