import React from 'react';
import Project from '../components/Project.js';
import {projects} from '../data/portfolioData.js';
import CarouselProjects from '../components/Carousel.js';
import {Link} from 'react-router-dom';

const ProjectsList = () => (

  //in a smaller window resolution, turn your projects into a carousel
    <div id = 'projects-section'>
      <h2 className = 'project-headline'>Some projects I've worked on</h2>
      <div className = 'bigger-project-container'>
        {projects.map(project => (
          <Project
            key = {project.id}
            heading = {project.heading}
            description = {project.description}
            tools = {project.tools}
            link = {project.link}
            img_link = {project.img_link}
          />
        ))}
      </div>

      {/* only display carousel when screen is a certain width */}
      <CarouselProjects />

      <Link to = '/projects'>
        <p className = 'modal-click'>Click here to see more of my projects.</p>
      </Link>
    </div>
);

export default ProjectsList;