import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products';
import Services from './pages/Services';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={Home} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
