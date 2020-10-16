import { Button, Nav} from "react-bootstrap";
import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import { UserContext } from "../../../App";

const NavBar = () => {
  const [loggedInUser] = useContext(UserContext);
  

    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light pt-2 font-weight-bold">

       <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <img src={logo} style={{height:"50px", marginLeft:"90px"}} alt=""/>
         <ul class="navbar-nav ml-auto">
            
           <li class="nav-item active">
             <a class="nav-link mr-5" href="home">Home <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item">
             <a class="nav-link mr-5" href="*">Out Portfolio</a>
           </li>  
           <li class="nav-item">
             <a class="nav-link mr-5" href="*">Our Team</a>
           </li>  
           <li class="nav-item">
             <a class="nav-link mr-5 " href="*">Contact Us</a>
           </li> 

                 <Nav.Link href="login">{loggedInUser.name}</Nav.Link>
               
                 <Button  className="brand-dark-btn mt-n2" href="/login" variant="primary">login</Button>
                 <Button  className="brand-dark-btn mt-n2" href="/admin" variant="primary">Admin</Button>
         </ul>
         
       </div>
     </nav>
         </div>
    );
};

export default NavBar;