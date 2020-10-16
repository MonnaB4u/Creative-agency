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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import CustomerOrders from './Component/CustomerOrders/CustomerOrders';
import Review from './Component/CustomerOrders/Review/Review'
import ServerList from './Component/CustomerOrders/ServerList/ServerList';
import AdminDashBoard from './Component/Admin/AdminDashBoard/AdminDashBoard';
import AddServer from './Component/Admin/AddServer/AddServer';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import NotFound from './Component/NotFound/NotFound';


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
          <PrivateRoute path="/customer"> <CustomerOrders></CustomerOrders> </PrivateRoute>
          <Route path="/review"> <Review></Review> </Route>
          <Route path="/server"> <ServerList></ServerList> </Route>   
           <PrivateRoute path="/admin"> <AdminDashBoard> </AdminDashBoard>  </PrivateRoute>
           <Route path="/addServer">  <AddServer></AddServer> </Route>
           <Route path="/makeAdmin">  <MakeAdmin></MakeAdmin> </Route>
           <Route path="*">  <NotFound></NotFound> </Route>

        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
