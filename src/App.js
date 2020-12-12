import React from 'react';

import './App.css';
import Heading from './components/header';
import Footing from './components/footer';
import LandingPage from './components/landingpage';
import SignupPage from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Heading />
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
        </Switch>
      </React.Fragment>
      <Footing />
    </Router>
  );
}

export default App;
