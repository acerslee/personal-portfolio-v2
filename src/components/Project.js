import {Window, Github} from 'react-bootstrap-icons';

const Project = ({heading, description, tools, link, img_link}) => {

  let toolsArray;
  toolsArray = tools.map(tool => (
      <li className = 'languages'>{tool}</li>
  ))

  return(
    <div className = "project-content">
      <img className = "project-images" src  = {img_link} alt={heading} />
        <div className = "project-details">
          <h3 className = "project-heading">{heading}</h3>
          <p className = 'project-description'>{description}</p>
          <ul className = "coding-list">
          {toolsArray}
          </ul>
          <a className = "project-links" rel = 'noreferrer' title="Github" href={link} target="_blank">
            <Github size = {25} style = {{backgroundColor: '#BC986A'}}/>
          </a>
          <a className = "project-links" rel = 'noreferrer' title="External link" href={link} target="_blank">
            <Window size = {25} style = {{backgroundColor: '#BC986A'}}/>
          </a>
        </div>
    </div>
  );
};

export default Project;