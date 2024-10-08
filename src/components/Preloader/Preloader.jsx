import React from 'react';
import './Preloader.css'; 
import loader from '../../assets/loader.gif'

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img style={{width: '20%', height: 'auto'}} src={loader} alt="Loading..." className="preloader-gif" />
    </div>
  );
};

export default Preloader;
