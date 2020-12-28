import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route></Route>
      </Switch>
    </Router>
    <Navbar/>
    </>
  );
}

export default App;
