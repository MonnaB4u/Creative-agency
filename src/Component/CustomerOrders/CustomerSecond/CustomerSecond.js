import React from 'react';
import { useForm } from "react-hook-form";
import icon from '../../../images/icons/icon.png';
import './CustomerSecond.css'
////////////////////////////////////////////////////////////////


const CustomerSecond = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        fetch('https://nameless-sierra-23580.herokuapp.com/addCustomer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Thanks for order");
                }
            })

    }



    /////////////////////
    return (
        <div style={{ width: '100%' }}>

            <h4 className='bg-light d-block pb-4 font-weight-bold pl-2'>Order  </h4>

            <div style={{ minWidth: '1030px' }} className='bg-light  mt-4 border rounded  p-5'>
                {/* ////////////////////////////////////////////////////// */}


                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group" style={{ minWidth: '10px' }}>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/Companys Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Your Email address" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="graphisDesign" placeholder="Graphis Design" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>


                    <div className="form-group">
                        <textarea name="Description" placeholder="Enter Description" name="projectDetails" className="form-control" id="exampleFormControlTextarea1" rows="3" ref={register({ required: true })} placeholder="Project Details" ></textarea>
                    </div>
                      
                      <div  className="row d-flex justify-content-between">
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="price" placeholder="price" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>

                   
                    <div className='col-md-5 px-0 mb-2'>
                            <div className="button-wrapper">
                                <span className="label">
                                    <img src={icon} alt="upload-icon" /> Upload project File
                                </span>
                                <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" />
                            </div>
                        </div>
                       
                        <br />
                    
                        </div>
                        <div className="form-group text-centet ml-0">
                            <button type="submit" class="btn btn-dark">Send</button>
                        </div>

                </form>


            </div>

        </div>
    );
};

export default CustomerSecond;