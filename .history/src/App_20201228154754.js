import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
   <Router>
        <Navbar />
        <Products
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
