import Project from '../components/Project.js';

const ProjectsList = ({projects}) => (
  <div className = 'projects-section'>
    <h2 className = "project-headline">Here are some projects that I've worked on!</h2>
    {projects.map(project => (
      <Project
        key = {project.id}
        heading = {project.heading}
        description = {project.description}
        link = {project.link}
        img_link = {project.img_link}
      />
    ))}
  </div>
);

export default ProjectsList;