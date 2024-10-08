import "./Footer.css";
import logo from "../assets/p.png";

function Footer() {
  return (
    <div style={{ backgroundColor: "black" }} className="pt-2">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/innovationcell" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://x.com/umic_iitb" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
                </a>
                <a href="https://www.instagram.com/umic_iitb/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/mycompany/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <br />
              <div
                className="contact-details"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start", // Aligns the items to the top
                }}
              >
                <div>
                  <h4>Contact Us</h4>
                  <h6>Phone No: 8197020074</h6>
                  <h6>Email: <a href="mailto:aryan.9232122@gmail.com" style={{textDecoration:"none",color:"white"}}> aryan.9232122@gmail.com </a></h6>
                  <h6>Location: UMIC Lab, Near Applied Materials Lab, Manas Building, IIT Bombay , Powai, Maharashtra 400076</h6>

                </div>
              
                <img
                  src={logo}
                  className="logo"
                  alt="Logo"
                  width="90"
                  height="90"
                  style={{ objectFit: "contain"}} 
                />
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-sm-row justify-content-end pt-4 mt-4 border-top"
            style={{ color: "white" }}
          >
            <p>© 2024 SeDriCa. IIT BOMBAY.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
