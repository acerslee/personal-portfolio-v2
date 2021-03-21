import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {projects} from '../data/portfolioData.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselProjects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
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
        </Carousel.Item>
      ))}
    </Carousel>
  )

};

export default CarouselProjects;