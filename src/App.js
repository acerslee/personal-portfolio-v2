import React from 'react';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import PersonalSection from './components/Personal.js';
import ProjectsList from './componentsList/ProjectsList';
import FootersList from './componentsList/FootersList.js';
import {projects, socials} from './data/projectData.js';


const App = () => (
  <div className = 'app-list'>
    <Header />
    {/* <Welcome /> */}
    {/* <PersonalSection /> */}
    <ProjectsList projects = {projects}/>
    <FootersList socials = {socials}/>
  </div>
);

export default App;