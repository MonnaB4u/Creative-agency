import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceData = ({service}) => {

    const history=useHistory()

    const handler=()=>{  

        history.push('/customer')
     }

    return (

        <div className="col-md-4 text-center" onClick={handler}>
        <img style={{height:"50px"}} src={service.img} alt=""/>
        
       <h5 className='mt-3 mb-3'>{service.name}</h5>
       <p className='text-secondary'>{service.info}</p>

    </div>
    );
};

export default ServiceData;