import React from 'react'
import './App.css';
import Header from './Components/Header/Header.jsx'
import Home from './LandingPage/Home';
import Checkout from './CheckoutPage/Checkout.jsx'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>    
    <div className="app">
    <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          
          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
