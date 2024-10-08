import React, { useState, useEffect } from 'react';
import './SedLoader.css'; // CSS for full-screen styling
import './Banner.css';    // CSS for banner styling

const SedLoader = ({ gifUrl, duration, children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
   
  
    useEffect(() => {
      // Check local storage to see if the preloader has been shown
      const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');

      if (!hasSeenPreloader) {
        // Show preloader only if not shown before in this session
        const timer = setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            // Mark preloader as shown in session storage
            sessionStorage.setItem('hasSeenPreloader', 'true');
          }, 500); // Fade-out duration
        }, duration);
  
        return () => clearTimeout(timer);
      } else {
        // If preloader has been shown in this session, skip it
        setIsLoading(false);
      }
    }, [duration]);
  return (
    <div>
      {isLoading ? (
        <div className={`preloader ${isFadingOut ? 'fade-out' : ''}`}>
          <img src={gifUrl} alt="Loading..." style={{width:'20%', height: 'auto'}} />
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
