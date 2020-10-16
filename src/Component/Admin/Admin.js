import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServiceList from './ServiceList/ServiceList';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [servers,setServer] = useState([]);

    useEffect(()=>{

        fetch('https://nameless-sierra-23580.herokuapp.com/Findorder')
        .then(res=>res.json())
        .then(data=>console.log(data))

    },[])
    return (
        
        <section  className="service-continer mt-5 m-3 px-3">
        <div className="d-flex justify-content-center">
            <div className='w-75 row mt-5 pt-5'>
                {
                    
                    servers.map(server => <ServiceList server={server}> </ServiceList >)
                }
            </div>
        </div>
    </section>
    );
};

export default Admin;