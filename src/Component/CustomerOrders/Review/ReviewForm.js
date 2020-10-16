import React from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = () => {
    
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data =>{
       
        fetch('https://nameless-sierra-23580.herokuapp.com/CustomerReview',{ 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert("Thanks for Review");
            }
        })

        }
    
    return (
        <div style={{ width: '100%' }}>

        <h4  className='bg-light d-block pb-4 font-weight-bold pl-2'>Order  </h4>

        <div style={{ minWidth: '1030px' }} className='bg-light  mt-4 border rounded  p-5'>
            {/* ////////////////////////////////////////////////////// */}     

         
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group" style={{ minWidth: '10px' }}>
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/Companys Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                   
                </div>

                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="work" placeholder="Company Name,Designation" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                

                
                <div className="form-group">
                        <textarea name="Description" placeholder="Enter Description" name="info" className="form-control" id="exampleFormControlTextarea1" rows="3" ref={register({ required: true })}  placeholder="Description" ></textarea>
                    </div>


                <div className="form-group text-left">
                <button type="submit" class="btn btn-dark">Submit</button>
                </div>
                  </form>


                    </div>
                  
                </div>
    );
};

export default ReviewForm;