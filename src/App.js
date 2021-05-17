import React from 'react'
import './App.css';
import  {BrowserRouter as Router, Link, Route}  from 'react-router-dom'
import Worlddata from './worlddata';
import Home from './Home';
import IndianData from './IndianData';

function App() {

  return (
    <Router>
    
    <Route exact path = '/'>
      <Home />
    </Route>
    <Route path = '/world'>
      <Worlddata />
    </Route>
    <Route path = '/india'>
      <IndianData />
    </Route>
    

    </Router>
  );
}

export default App;
