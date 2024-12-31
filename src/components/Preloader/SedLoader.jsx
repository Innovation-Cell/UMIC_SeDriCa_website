import React, { useState, useEffect } from 'react';
import './SedLoader.css'; // CSS for full-screen styling
import './Banner.css';    // CSS for banner styling

const SedLoader = ({ gifUrl, duration}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
//   const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Allow the fade-out animation to complete before hiding the preloader
      setTimeout(() => {
        setIsLoading(false);
        // setShowBanner(true);  // Show the banner after fade-out completes
      }, 500); // Fade-out duration
    }, duration);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [duration]);


  return (
    <div>
      {isLoading ? (
        <div className={`preloader ${isFadingOut ? 'fade-out' : ''}`}>
          <img src={gifUrl} alt="Loading..." className='preloader-gif' style={{width:'100%', height: 'auto'}} />
        </div>
      ): null}
      {/* Banner appears after the preloader is gone */}
      {/* {showBanner && <Banner imageUrl="https://via.placeholder.com/728x500" />} */}
    </div>
  );
};


// Banner Component
// const Banner = ({ imageUrl }) => {
//     const [isVisible, setIsVisible] = useState(true);
  
//     const handleClose = () => {
//       setIsVisible(false); // Hide the banner on close
//     };
  
//     return isVisible ? (
//       <div className="banner">
//         <div className="banner-content">
//           <img src={imageUrl} alt="Ad banner" className="banner-img" />
//           <button className="banner-close" onClick={handleClose}>
//             &times; {/* Close button symbol */}
//           </button>
//         </div>
//       </div>
//     ) : null;
//   };

export default SedLoader;