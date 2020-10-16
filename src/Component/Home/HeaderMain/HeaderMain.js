import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    const history=useHistory()

  const handler=()=>{  

      history.push('/login')
   }
    return (
        <main style={{height:"500px", marginLeft:"40px"}} class="row d-flex align-items-center">

        <div class="col-md-4">
             <h1 style={{color:"#3A4256"}}>Let's Grow Your <br/> Brand To The <br/> Next Lavel </h1>
             <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium laboriosam maiores.</p>
             <button onClick={handler} class="btn btn-primary">Hire us </button>     
                    </div>

        <div class="col-md-6">

           <img src={logo} alt="" className="img-fluid p-2"/>

        </div>

    </main>
   
    );
};

export default HeaderMain;