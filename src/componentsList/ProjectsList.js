import Project from '../components/Project.js';

const ProjectsList = ({projects}) => (
  <div className = 'projects-section'>
    <h2 className = "project-headline">Some projects I've worked on</h2>
    {projects.map(project => (
      <Project
        key = {project.id}
        heading = {project.heading}
        description = {project.description}
        languages = {project.languages}
        link = {project.link}
        img_link = {project.img_link}
      />
    ))}
  </div>
);

export default ProjectsList;