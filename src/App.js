import React from 'react';
import Header from './components/Header.js';
import Welcome from './components/Welcome.js';
import PersonalSection from './components/Personal.js';
import ProjectsList from './componentsList/ProjectsList';
import AllProjects from './components/AllProjects.js';
import FootersList from './componentsList/FootersList.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <div className = 'app-list'>
        <Header />
          <Switch>
            <Route path = '/' exact render = {() =>
              <div>
                <Welcome />
                <PersonalSection />
                <ProjectsList />
                <FootersList />
              </div>
            }
            />
            <Route path = '/projects' exact component = {AllProjects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;