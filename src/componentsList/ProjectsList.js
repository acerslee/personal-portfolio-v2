import React, {useState} from 'react';
import Modal from 'react-modal';
import Project from '../components/Project.js';
import ProjectModal from '../components/projectModal.js';
import {projects} from '../data/portfolioData.js';
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';


const ProjectsList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState(0);

  Modal.setAppElement('body');

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
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
      <Carousel
        activeIndex = {index}
        onSelect = {handleSelect}
        className = 'carousel'
      >
        {projects.map(project => (
          <Carousel.Item>
            <img
              className = 'd-block w-100'
              src = {project.img_link}
              alt = 'project'
            />
            <Carousel.Caption>
              <h3>{project.heading}</h3>
              <p>{project.description}</p>
            </Carousel.Caption>
            {/* <Project
              key = {project.id}
              heading = {project.heading}
              description = {project.description}
              tools = {project.tools}
              link = {project.link}
              img_link = {project.img_link}
            /> */}
          </Carousel.Item>
        ))}
      </Carousel>
      {/* end carousel */}

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