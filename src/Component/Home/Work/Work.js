import React from 'react';
import work1 from '../../../images/carousel-1.png'
import work2 from '../../../images/carousel-2.png'
import work3 from '../../../images/carousel-3.png'
import work4 from '../../../images/carousel-4.png'
import './Work.css'
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

const Work = () => {
    return (

        <section className="work">
            <div className="container">
                {/* <div className="row "> */}
                    {/* <div className="col-md-7 text-white py-5 justify-content-center " > */}
        
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="..." class="d-block w-100" alt="..."/>

    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                 
                 
                   
                    </div>
                {/* </div>
            </div> */}
        </section>

    );
};

export default Work;