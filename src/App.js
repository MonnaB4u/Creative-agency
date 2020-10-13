import React, { createContext, useContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>

          <Route exact path="/"> <Home></Home> </Route>
          <Route path="/home"> <Home></Home> </Route>
          <Route path="/login"> <Login></Login> </Route>

        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
