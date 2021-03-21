import React, {useState} from 'react';
import Modal from 'react-modal';
import Project from '../components/Project.js';
import ProjectModal from '../components/projectModal.js';
import {projects} from '../data/portfolioData.js';
import CarouselProjects from '../components/Carousel.js';

const ProjectsList = () => {
  const [openModal, setOpenModal] = useState(false);

  Modal.setAppElement('body');

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  //in a smaller window resolution, turn your projects into a carousel
  return(
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

      <p className = 'modal-click' onClick = {toggleModal}>Click here to see more of my projects</p>
      <Modal
        isOpen = {openModal}
        onRequestClose = {toggleModal}
        className = 'mymodal'
        overlayClassName = 'myoverlay'
      >
      <ProjectModal />
      </Modal>
    </div>
  )
};

export default ProjectsList;