import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
