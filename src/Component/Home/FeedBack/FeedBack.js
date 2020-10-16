import React, { useEffect, useState } from 'react';
import FeedBackInfo from '../FeedBackInfo/FeedBackInfo';


 const FeedBack = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{

        fetch('https://nameless-sierra-23580.herokuapp.com/FindCustomer')
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])
   
    return (
        <section classname="blogs my-5">
        <div classname="container">

        <div className="my-5">
                <h3 className="text-center"><strong>Clients <span style={{ color: '#7AB259' }}>Feedbacks</span></strong></h3>
            </div>
            
            <div>

            <div className="card-deck mt-5">

            {
                data.map(blog => <FeedBackInfo blog={blog}> </FeedBackInfo>)
            }
            </div>
             </div>
        </div>
    </section>
    );
};

export default FeedBack;