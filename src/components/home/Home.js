import "./Home.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import Aos from "aos";

import Footer from "../../components/footer/Footer";
import Slide from "../Slide/Slide";
import { Products } from "../Products/Products";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    {/* <Slide/> */}

    <div class="">
  <div class="row row-cols-2 row-cols-lg-1">
  <div class="col-1 col-lg-1" 
  ></div>
    <div class="col-4 col-lg-10" 
    style={{fontfamily: 'Poppins',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '0em',
      textAlign: 'left',
      // marginLeft:'1rem',
      color: '#000000',
      fontWeight:'bold'

      }}>Categories</div>
    <div class="col-4 col-lg-1 " style={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '500',
lineHeight: '24px',
letterSpacing: '0em',
textAlign: 'left',
color: '#E74C1B'

}}>See All</div>

  </div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4">
<div class="card-body " style={{background:'#FFEEE8'}}>
      <div class="column" >
  </div>
  <div class="centered1" style={{
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'left',
    
  }}>Salad</div>
  <div class="column">
    <img src="https://res.cloudinary.com/alpja/image/upload/v1703951673/pdgk7atczremjxzk9auk.png" alt="Mountains" style={{width:'100%'}}/>
  </div>
      </div>
  <div class="card-body " style={{background:'#FFEEE8'}}>
      <div class="column" >
  </div>

  <div class="centered" style={{
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'left',
    
  }}>Steak</div>
  <div class="column">
    <img src="https://res.cloudinary.com/alpja/image/upload/v1703965030/ixwqtzdiepqxe8exanfp.png" alt="Mountains" style={{width:'100%'}}/>
  </div>
      </div>
      <div class="card-body " style={{background:'#FFEEE8'}}>
      <div class="column" >
  </div>

  <div class="centered2" style={{
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'left',
    
  }}>Chicken</div>
  <div class="column">
    <img src="https://res.cloudinary.com/alpja/image/upload/v1703965696/3rd_y40u8p.png" alt="Mountains" style={{width:'100%'}}/>
  </div>
      </div>
</div><br/>


<div class="">
  <div class="row row-cols-2 row-cols-lg-1">
  <div class="col-1 col-lg-1" 
  ></div>
    <div class="col-4 col-lg-10" 
    style={{fontfamily: 'Poppins',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '0em',
      textAlign: 'left',
      // marginLeft:'1rem',
      color: '#000000',
      fontWeight:'bold'

      }}>   Recommended Items</div>
    <div class="col-4 col-lg-1 " style={{fontFamily: 'Poppins',
fontSize: '16px',
fontWeight: '500',
lineHeight: '24px',
letterSpacing: '0em',
textAlign: 'left',
color: '#E74C1B',
fontWeight:"bold"

}}>Filter</div>

  </div>
</div>
<Products/>


  
  



      <Footer />
    </>
  );
};
export default Home;
