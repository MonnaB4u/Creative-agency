import React from 'react';
import airbn from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import './Brand.css'

const Brand = () => {
    return (
        <section className='row  d-flex justify-content-center card '>
            <div>

                <div className=" d-flex d-flex justify-content-center brand-container">
                    <img src={slack} alt="" />
                    <img src={google} alt="" />
                    <img src={netflix} alt="" />
                    <img src={airbn} alt="" />
                    <img src={uber} alt="" />

                </div>

            </div>
        </section>
    );
};

export default Brand;