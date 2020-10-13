import React from 'react';
import logo from '../../images/logos/logo.png';
const loginNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <img src={logo} style={{ height: "50px", marginLeft: "90px" }} alt="" />
                </div>
            </nav>
        </div>
    );
};

export default loginNav;