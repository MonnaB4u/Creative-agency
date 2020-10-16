import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

import { faShoppingCart,faList,faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// const icon= [ 
//     {
//         icon:
//     }
// ]
const CustomerSidebar = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
       
        <div  className='d-flex mt-4 mb-5 col-12'>

        <div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light'>
            <Link to="/home">
                <img style={{ height: '50px', marginLeft: '35px' }} src={logo} alt="" />
            </Link>

          
            <div className='container mt-4 ml-3'>
         
            <Nav.Link href="customer">
            <FontAwesomeIcon icon={faShoppingCart} /> Order</Nav.Link>  
           
            </div>
            

            <div className='container mt-2 ml-3'>
            <Nav.Link  href="server">  <FontAwesomeIcon icon={faList}/>Service List</Nav.Link>  
            </div>

            <div className='container mt-2 ml-3'>
            <Nav.Link href="review"> <FontAwesomeIcon icon={faCommentDots}/> Review</Nav.Link>  
            </div>

        </div>

        <h4 style={{ width: '100%' }}  className='d-block pb-4 font-weight-bold pl-2'>Order  </h4>
        <h5 className="d-flex justify-content-end" >{loggedInUser.name}</h5>
        
        </div>
        
    );
};

export default CustomerSidebar;