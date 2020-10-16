import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';

const Server = () => {

    // const {name,graphisDesign,projectDetails}=props.server;

    const [servers, setServer] = useState([]);

    useEffect(() => {

        fetch('https://nameless-sierra-23580.herokuapp.com/Findorder')
            .then(res => res.json())
            .then(data => setServer(data))

    }, [])

    return (



        <div>
            {
                servers.map((each, index) =>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{each.name}</h5>
                        <p class="card-text">{each.graphisDesign}</p>
                        <p  class="card-text">{each.projectDetails}</p>
                    </div>
                    </div>
              )}
        </div>


    );
};

export default Server;