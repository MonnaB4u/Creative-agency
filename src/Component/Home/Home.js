import React from 'react';
import Brand from './Brand/Brand';
import CustomerFeedBackMAin from './CustomerFeedBackMAin/CustomerFeedBackMAin';
import FeedBack from './FeedBack/FeedBack';
import Header from './Header/Header';
import Service from './Service/Service';
import Work from './Work/Work';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brand></Brand>
            <Service></Service>
         <Work></Work>
         <FeedBack></FeedBack>
         <CustomerFeedBackMAin></CustomerFeedBackMAin>
         
        </div>
    );
};

export default Home;