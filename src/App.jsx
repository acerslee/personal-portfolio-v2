import React from 'react';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import PersonalSection from './components/Personal.js';
import Project from './components/Project.js';
import FootersList from './componentsList/FootersList.js';
import {projects, socials} from './data/projectData.js';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      projects: projects
    }
  }

  render() {
    return(
      <div>
        <Header />
        <Welcome />
        <PersonalSection />
        <Project />
        <FootersList socials = {socials}/>
      </div>
    )
  }
};

export default App;
