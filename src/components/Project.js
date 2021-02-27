const Project = ({heading, description, languages, link, img_link}) => {

  let languageArray;
  languageArray = languages.map(language => (
      <li className = 'languages'>{language}</li>))

  return(
    <div className = "project-content">
      <h3 className = "project-heading">{heading}</h3>
      <p>{description}</p>
      <ul className = "coding-list">
       {languageArray}
      </ul>
      <a className = "project-links" rel = 'noreferrer' title="Github" href={link} target="_blank"><i className="fab fa-github"></i></a>
      <img className = "project-images" src  = {img_link} alt={heading} />
    </div>
  );
};

export default Project;