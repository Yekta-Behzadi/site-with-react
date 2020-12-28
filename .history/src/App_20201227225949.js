import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import Home from './pages/'


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
