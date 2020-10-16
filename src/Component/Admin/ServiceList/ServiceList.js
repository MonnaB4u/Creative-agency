import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const ServiceList = () => {
    // const { name, email, graphisDesign, projectDetails } = props.server;
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://nameless-sierra-23580.herokuapp.com/Findorder')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div>

        <div className="py-2">
       
        </div>
        <div className="d-flex flex-wrap p-2" style={{ height: '550px', overflow: 'auto', backgroundColor: '' }}>

            <table className="table table-hover p-3 bg-white " >
                <thead style={{fontWeight:'500'}}>
                    <tr className="table-primary" style={{fontWeight:'500'}}>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Project Details</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody style={{ height: "600px", overflow: 'auto'}}>

                    {
                        data.map((each, index) =>
                            <tr style={{fontWeight:'500'}}>
                                <td>{index + 1}</td>
                                <td>{each.name}</td>
                                <td>{each.email}</td>
                                <td>{each.graphisDesign}</td>
                                <td>{each.projectDetails}</td>
                                <td style={{ maxWidth: '150px' }}>{each.details}</td>
                                <td>
                                </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ServiceList;