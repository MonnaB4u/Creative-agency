import React from 'react';
import CustomerFeedBack from '../CustomerFeedBack/CustomerFeedBack';

const CustomerFeedBackMAin = () => {
    return (
        <main  style={{height:"200px", marginLeft:"60px"}} className=" row d-flex" >  
{/* class="row d-flex align-items-center" */}
  <div style={{backgroundColor:"yellow"}} className=" row d-flex" >

        <div class="col-md-5">
             <h3>Let us Handle Your <br/>  project, professionally. </h3>
             <small>With well written codes, we build amazing apps for all platforms,mobile and web in general</small>    
                    </div>

        <div class="col-md-5  align-items-center"> 

          <CustomerFeedBack></CustomerFeedBack>

        </div>
        </div>
    </main>
    );
};

export default CustomerFeedBackMAin;