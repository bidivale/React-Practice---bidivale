import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./Checkout";
import Header from './Header';
import Home from "./Home";
import React from 'react';

function App() {
  return (
    //BEM
    <Router>
    <div className="app">
    <Header/>
      
        <Switch>

        <Route path="/checkout">
            
            <Checkout/>
            </Route>


          <Route path="/">
            
            <Home />
          </Route>
        </Switch>
      
    </div>
    </Router>
  )
}
            
      
            

export default App;

