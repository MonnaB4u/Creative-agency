import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../../images/logos/logo.png';
import { useForm } from 'react-hook-form';
const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();


    return (
      

        <div className='d-flex mt-4 mb-5 col-12'>

            <div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light'>
                <Link to="/home">
                    <img style={{ height: '50px', marginLeft: '35px' }} src={logo} alt="" />
                </Link>

                <div className='container mt-4 ml-3'>
                    <Nav.Link href="/admin"><FontAwesomeIcon icon={faList} />Service list</Nav.Link>
                </div>

                <div className='container mt-2 ml-3'>
                    <Nav.Link href="addServer"><FontAwesomeIcon icon={faPlus} />Add Service</Nav.Link>
                </div>

                <div className='container mt-2 ml-3'>
                    <Nav.Link href="review"><FontAwesomeIcon icon={faUserPlus} />Make Admin</Nav.Link>
                </div>

            </div>
 <div className="col-md-6 col-sm-12">
            <form>
                        <label>Email of New Admin</label>
                        <input  name="title" type="text" className="form-control" required />
                        <br />
                        <button type="submit" className="brand-green-btn">Submit</button>
                    </form>
                    </div>
                    

 {/* 
                <div className="form-group bg-light" >
                    <input type="text" name="name" placeholder="Service Title" className="form-control" />
                    {errors.phone && <span className="text-danger">This field is required</span>}

                </div> */}
                </div>
               
    );
};

export default MakeAdmin;