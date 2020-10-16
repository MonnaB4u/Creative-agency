import React, { useEffect, useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ServiceList from '../ServiceList/ServiceList';





const containerStyle = {
    border: '1px solid red'
}

const AdminDashBoard = () => {
  
    return (

        <section>

        <div style={containerStyle} className="row">

            <div className="col-md-3 col-sm-6 col-12">
                <AdminSideBar></AdminSideBar>
            </div>

            <div className="col-md-9 col-12" >
            <ServiceList></ServiceList>                            
            </div>
        </div>
    </section>
    );
};

export default AdminDashBoard;