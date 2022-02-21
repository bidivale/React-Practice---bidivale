import { Auth, onAuthStateChanged } from './firebase.js'
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Checkout from "./Checkout";
import Header from './Header';
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect (() => {
    // will only run once when the app component loads
    onAuthStateChanged((Auth), authUser => {
    console.log ('THE USER IS >>>', authUser);
    if (authUser) {
      //The user just logged in / the user was logged in
      dispatch ({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      //The user has logged out
      dispatch ({
        type: 'SET_USER',
        user: null
      })
    }
  })
}, [])

  return (
    //BEM
    <Router>
    <div className="app">
   
      
        <Switch>
          
        <Route path="/login">
            
            <Login/>
            </Route> 

        <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>


          <Route path="/">
            
            <Header/>
            <Home />
          </Route>
        </Switch>
      
    </div>
    </Router>
  )
}
            
      
            

export default App;

