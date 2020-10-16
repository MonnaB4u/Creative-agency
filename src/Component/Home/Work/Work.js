import React from 'react';
import Slider from 'react-slick';
import work1 from '../../../images/carousel-1.png'
import work2 from '../../../images/carousel-2.png'
import work3 from '../../../images/carousel-3.png'
import work4 from '../../../images/carousel-4.png'
import './Work.css'



var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;


const Work = () => {
  const img = [work1,work2,work3, work4];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }, 
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
  
    return (

        <div className="">
        <div className="mt-4 pt-3">
            <h3 className="gap text-center"><strong> <span className="text-white">Here are some of</span> <span style={{ color: '#7AB259' }}>our works</span></strong></h3>
        </div>
      
      <Slider className="mx-2" {...settings}>

          {
              img.map((each , index) => <img src={each} key={index} className="p-2 mx-2" alt=""/> )
          }
          
      </Slider>
  </div >
    );
};

export default Work;