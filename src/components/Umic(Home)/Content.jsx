import { useRef, useEffect } from 'react';
import vid from "../../assets/vid.mp4";
import Card from "./Card";

function Content() {
  // Reference to the video element
  const videoRef = useRef(null);

  const startVideo = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.muted = false; // Ensure sound is not muted
      videoRef.current.play().catch(error => {
        console.log('Video playback failed:', error);
      });
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current; // Save a reference to videoRef.current

    const handleCanPlayThrough = () => {
      startVideo(); // Play the video once it is ready
    };

    if (videoElement) {
      // Add the canplaythrough event listener
      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
    }

    return () => {
      if (videoElement) {
        // Clean up the event listener
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      }
    };
  }, []); // Ensure the effect only runs once by leaving dependencies empty

  return (
    <>
      <div className="row featurette m-5 align-items-center">
        {/* Text Section */}
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            UMIC
          </h2>
          <br />
          <p className="lead">
            Unmesh Mashruwala Innovation Cell, also widely known as UMIC, is a tech team formed to embrace and develop the idea of an autonomous future. The team consists of 60+ students from various fields and years of study at IIT Bombay. Under the sheds of the UMIC, the primary area of focus is developing autonomous vehicles.
          </p>
        </div>

        {/* Video Section */}
        <div className="col-md-5 d-flex align-items-center">
          <video
            ref={videoRef}
            className="w-100 round"
            style={{
              height: "auto",
              maxHeight: "100%",
            }}
            autoPlay
            loop
            onClick={() => videoRef.current && videoRef.current.pause()}
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Card Component */}
      <Card />
    </>
  );
}

export default Content;
