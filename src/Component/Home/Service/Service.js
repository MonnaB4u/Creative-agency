import React from 'react';
import mobile from '../../../images/icons/service1.png'
import graphics from '../../../images/icons/service2.png'
import web from '../../../images/icons/service3.png'
import ServiceData from '../ServiceData/ServiceData';
const serviceData = [
    {
        name: 'Web & Mobile design',
        img: mobile,
        info:'we craft stunning and amazing web UI using a well drradted ux to fix your prodact'
    },

    {
        name: 'Graphics design',
        img: graphics,
        info:"Amazing flyers,social media posts and brand representations that woud make your brand stand out"
    },
    {
        name: 'Web development',
        img: web,
        info:"With well written codes, we buld amazing apps for all platforms, mobile and web apps in general."
    }

]

const Service = () => {
    return (

        <section className="service-continer mt-5">
            <div className="text-center">

                <h3 style={{ textStyle: 'bold' }}>Provide awesome <small style={{ color: '#1CC7C1', textStyle: 'bold' }}> Services </small></h3>
            </div>
            <div className="d-flex justify-content-center">
                <div className='w-75 row mt-5 pt-5'>
                    {
                        serviceData.map((service => <ServiceData service={service}></ServiceData>))
                    }
                </div>
            </div>

        </section>
    );
};

export default Service;