import React from 'react';
import { Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import icon from '../../../images/icons/icon.png';
import logo from '../../../images/logos/logo.png';
import { faList,faPlus,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const AddServer = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('https://nameless-sierra-23580.herokuapp.com/AddService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Sucessfull");
                }
            })

    }

    return (
        <div className='d-flex mt-4 mb-5 col-12'>


            <div class="d-flex flex-row bd-highlight mb-3">
                <div style={{ minHeight: '100vh', minWidth: '250px' }} className='pr-5 bg-light col-md-2 col-sm-6 col-12'>
                    <Link to="/home">
                        <img style={{ height: '50px', marginLeft: '35px' }} src={logo} alt="" />
                    </Link>
                    <div className='container mt-4 ml-3'>
                        <Nav.Link href="admin"><FontAwesomeIcon icon={faList}/> Service List</Nav.Link>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <Nav.Link href="addServer"><FontAwesomeIcon icon={faPlus}/>Add Service</Nav.Link>
                    </div>

                    <div className='container mt-2 ml-3'>
                        <Nav.Link href="makeAdmin"><FontAwesomeIcon icon={faUserPlus}/>Make Admin</Nav.Link>
                    </div>



                </div>
            </div>

            {/* ////////////////////// */}

            <div className="col-md-9 col-12">
                <div className="d-flex flex-wrap p-2 col-md-10 col-12" style={{ height: '550px', overflow: 'auto', backgroundColor: '' }}>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex flex-row bd-highlight mb-3">

                        <div className="form-group bg-light" >
                            <input type="text" ref={register({ required: true })} name="name" placeholder="Service Title" className="form-control" />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </div>

                        <div style={{ marginLeft: "20px" }} className='col-md-5 px-0 mb-2'>
                            <div className="button-wrapper">
                                <span className="label">
                                    <img src={icon} alt="upload-icon" /> Upload Image
                                </span>
                                <input type="file" name="img" id="upload" className="upload-box" placeholder="Upload File" />
                            </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <textarea name="Description" placeholder="Enter Description" name="info" className="form-control" id="exampleFormControlTextarea1" rows="3" ref={register({ required: true })} placeholder="Enter Description" ></textarea>
                    </div>
                    
                    <div className="form-group text-centet ml-0">
                        <button type="submit" class="btn btn-dark">Send</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddServer;