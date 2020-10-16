import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceList from '../../Admin/ServiceList/ServiceList';
import CustomerSidebar from '../CustomerSidebar/CustomerSidebar';
import Server from './Server/Server';


const ServerList = () => {
    return (

        <section>

        <div  className="row">

            <div className="col-md-3 col-sm-6 col-12">
                <CustomerSidebar></CustomerSidebar>
            </div>

            <div className="col-md-9 col-12 w-75 row mt-5 pt-5" >
            <Server></Server>                      
            </div>
        </div>
    </section>


    );
};

export default ServerList;