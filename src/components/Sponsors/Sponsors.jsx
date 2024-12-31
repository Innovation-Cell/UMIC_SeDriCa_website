import { useState } from "react";
import Footer from "../Footer";
import nvedia from "../../assets/sponsor/nvedia.png";
import ouster from "../../assets/sponsor/ouster.png";
import reliance from "../../assets/sponsor/Reliance.png";
import texas from "../../assets/sponsor/texas.png";
import continental from "../../assets/sponsor/continental.png";
import vlid from "../../assets/sponsor/VLid.png";
import RQ from "../../assets/sponsor/RQ.png";
import kudan from "../../assets/sponsor/kudan.png";
import maxm from "../../assets/sponsor/maxm.png";
import Sp from "../../assets/sponsor/Sparton.png";
import Sick from "../../assets/sponsor/sick.png";
import ast from "../../assets/sponsor/ast.png";
import vcn from "../../assets/sponsor/vcn.png";
import asb from "../../assets/sponsor/asbsys.png";
import ea from "../../assets/sponsor/ea.png";
import "./Sponsors.css"; // Import the CSS file
import MyClass from "../Nav";

function Sponsors() {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission status

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnaekll", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true); // Set the submitted status to true
        form.reset(); // Clear form after submission
      } else {
        alert("Failed to send collaboration request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div>
      <MyClass />

      <h1 className="main-heading" style={{margin:"20px"}}>
         <a href="#collaborators" className="section-link"> <button className="square-btn rounded-2">Collaborate With Us  ⬇ </button></a>
      </h1>

      {/* Sponsors Section */}
      <div id="sponsors" className="sponsors-container">
        <div className="sponsor-row">
          <img src={nvedia} alt="Nvedia" className="sponsor-image" />
          <img src={ouster} alt="Ouster" className="sponsor-image" />
          <img src={reliance} alt="Reliance" className="sponsor-image" />
          <img src={texas} alt="Texas" className="sponsor-image" />
          <img src={continental} alt="Continental" className="sponsor-image" />
        </div>
        <div className="sponsor-row">
          <img src={Sp} alt="Sparton" className="sponsor-image" />
          <img src={RQ} alt="RQ" className="sponsor-image" />
          <img src={kudan} alt="Kudan" className="sponsor-image" />
          <img src={maxm} alt="Max Motor" className="sponsor-image" />
        </div>
        <div className="sponsor-row">
          <img src={Sick} alt="Sick" className="sponsor-image" />
          <img src={vlid} alt="Lydar" className="sponsor-image" />
          <img src={ea} alt="EA" className="sponsor-image" />
        </div>
        <div className="sponsor-row">
          <img src={vcn} alt="Vector Nav" className="sponsor-image" />
          <img src={asb} alt="ASB systems" className="sponsor-image" />
        </div>
        <div className="sponsor-row">
          <img src={ast} alt="Ast" className="sponsor-image small-image" />
        </div>
      </div>

      {/* Collaborators Section */}
      <div id="collaborators" className="collaborators-form-container">
        <div className="collaborate-container">
          <h2 style={{textAlign:"center",fontFamily:'Planer'}}>Collaborate with Us</h2>
          <p style={{textAlign:"center"}}>Our Team will make sure to get back to you</p>
          <div className="fle">
          {isSubmitted ? (
            <p className="confirmation-message">
              Thank you! Your collaboration request has been submitted successfully.
            </p>
          ) : (
            <form className="collaborators-form" onSubmit={handleSubmit}>
              <div className="two">
              <div className="form-group" style={{flex:"1"}}>
                <input
                  type="text"
                  name="companyName"
                  className="input-field"
                  placeholder="NAME OF THE COMPANY"
                  required
                />
              </div>
              <div className="form-group" style={{flex:"1"}}>
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="EMAIL ADDRESS"
                  required
                />
              </div>
              </div>
              <div className="form-group">
                <input
                  type="url"
                  name="website"
                  className="input-field"
                  placeholder="COMPANY WEBSITE"

                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="purpose"
                  className="input-field"
                  required
                  placeholder="PURPOSE OF COLLABORATION"
                ></textarea>
              </div>
              <button type="submit" className="square-btn rounded-4 submit-button">
                Submit
              </button>
            </form>
          )}
          {/* <img className="justify-content-center align-items-center" src={t2} alt="Hi"/>  */}
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Sponsors;
