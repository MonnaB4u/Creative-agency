import React from 'react';
import Brand from './Brand/Brand';
import CustomerFeedBackMAin from './CustomerFeedBackMAin/CustomerFeedBackMAin';
import FeedBack from './FeedBack/FeedBack';
import Header from './Header/Header';
import Service from './Service/Service';
import Work from './Work/Work';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Brand></Brand>
            </div>
            <Service></Service>

            <div className="work">
                <div className="container">
                    <Work></Work>
                </div>
            </div>

            <div className="container my-5">
                <FeedBack></FeedBack>
            </div>

            <CustomerFeedBackMAin></CustomerFeedBackMAin>

        </div>
    );
};

export default Home;