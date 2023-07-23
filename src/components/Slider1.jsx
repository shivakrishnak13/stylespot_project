import { position } from '@chakra-ui/react';
import React, { useState } from 'react'


import Slider from 'react-slick';


 






function Slider1({image1,image2}) {
  
  
  const data=[
    {
      image: image1,
      

    },
    {
      image:image2,
     
    },
    {
        image:image1,
       
      },
    
   
     
      
   
   
   
   
   
  ]

  
     
  
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:[
      {
        
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div style={{width:"70%",marginLeft:"30px"}} className='slider'>
     
    <Slider {...settings}>
   
   {
    data.map((e,index)=>(
      <div  key={index}>
<img style={{marginTop:"20px",position:"relative",left:"100px",right:"100px"}} width="40%" src={e.image}alt="" />
     </div>
    

     
    
    
     
     
    ))
    
   } 
   </Slider>
 
  

   

 


   
 
    </div>
  )
}





export default Slider1
