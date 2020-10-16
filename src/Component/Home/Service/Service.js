import React, { useState } from 'react';
import { useEffect } from 'react';

import ServiceData from '../ServiceData/ServiceData';

const Service = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://nameless-sierra-23580.herokuapp.com/FindService')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

   
    return (

        <section className="service-continer mt-5 m-3 px-3">
            <div className="text-center">
            <h3 className="text-center"><strong>Provide awesome  <span style={{ color: '#7AB259' }}>Services </span></strong></h3>
            </div>
            <div className="d-flex justify-content-center">
                
                <div className='w-75 row mt-5 pt-5'>
                    {
                        data.map(service => <ServiceData service={service}> </ServiceData>)
                    }
                </div>

            </div>

        </section>
    );
};

export default Service;