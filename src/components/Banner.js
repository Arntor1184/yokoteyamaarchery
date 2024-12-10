import React from 'react';
import header from '../images/header.jpg';
import './Banner.css'; 

const Banner = () => {
    return (
      <>
        {/* Banner Image */}
        <div className="header-banner">
          <img src={header} alt="Yokoteyama Archery Club Banner" />
        </div>
  
        
      </>
    );
  };
  
  export default Banner;