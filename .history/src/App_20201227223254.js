import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <>
    <HeroSec
    <Router>
    <Navbar/>
      <Switch>
        <Route path='/' exact />

      </Switch>
    </Router>
    </>
  );
}

export default App;
