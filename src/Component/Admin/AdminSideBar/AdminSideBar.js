import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { faList,faPlus,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminSideBar = () => {
    return (
        <div  className='d-flex mt-4 mb-5 col-12'>

        <div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light'>
            <Link to="/home">
                <img style={{ height: '50px', marginLeft: '35px' }} src={logo} alt="" />
            </Link>

            <div className='container mt-4 ml-3'>
            <Nav.Link href="/admin"><FontAwesomeIcon icon={faList}/>Service list</Nav.Link>  
            </div>

            <div className='container mt-2 ml-3'>
            <Nav.Link href="addServer"><FontAwesomeIcon icon={faPlus}/>Add Service</Nav.Link>  
            </div>

            <div className='container mt-2 ml-3'>
            <Nav.Link href="makeAdmin"><FontAwesomeIcon icon={faUserPlus}/>Make Admin</Nav.Link>  
            </div>

        </div>
        <div>
        </div>
        
        </div>
    );
};

export default AdminSideBar;