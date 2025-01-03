import { useState, useEffect, useRef } from "react";
import { Link,useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sedrica from "./../assets/Sedrica.png";
import Umic from "./../assets/Umic.png";
import bars from "./../assets/bars.jpg";
import io from "./../assets/io1.png"
import "./Nav.css";

function MyClass() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(getActiveIndex(location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function getActiveIndex(path) {
    switch (path) {
      case "/":
        return 0;
      case "/competitions":
        return 1;
      case "/Teams/Sedrica":
        return 2;
      case "/Subsystems":
        return 3;
      case "/MediaBlog":
          return 4;
      case "/Gallery":
          return 5;
      case "/sponsors":
        return 6;
      case "/ResearchGroup":
        return 7;
      case "/Benefactors":
        return 8;
      default:
        return 0;
    }
  }

  useEffect(() => {
    setActiveIndex(getActiveIndex(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleClick = (index) => {
    setActiveIndex(index);
    if (window.innerWidth <= 611) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ backgroundColor: "black", padding: "5px" }}>
      <div style={{ backgroundColor: "black"}}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); \n .navigation {position: relative;height: 70px;display: flex;justify-content: flex-end;align-items: center; padding:45px 0px 45px 45px;}.navigation ul {display: flex;}.navigation ul li {    position: relative;    width: 70px;  height: 70px;  list-style: none;  z-index: 1;}.navigation ul li a {position: relative;display: flex;justify-content: center;align-items: center;flex-direction: column;width: 100%;text-align: center; font-weight: 500;} .navigation ul li a .icon {   position: relative;    display: block;    line-height: 90px;    font-size: 1.5em;    text-align: center;    color: hsl(0, 0%, 100%, 40%);} .navigation ul li.active a .icon {    color: hsl(0, 0%, 100%); line-height: 70px } .navigation ul li a .icon:hover{color: hsl(0, 0%, 100%); transform: scale(1.2);} .navigation ul li a .text {    position: absolute;color: whitesmoke;    font-weight: 400;    font-size: 0.75em;letter-spacing: 0.05em;    opacity: 0;    transform: translateY(35px); transition: transform 0.3s ease, opacity 0.3s ease;}  .navigation ul li.active a .text {  transform: translateY(30px);   opacity: 1;} \n     .navigation ul li a .circle {\n            position: absolute;\n       top:60%;     display: block;\n            width: 50px;\n            height: 50px;\n            background: transparent;\n            border-radius: 50%;\n            border: 1.8px solid #fff;\n            transform: translateY(-37px) scale(0);\n    transition: transform 0.5s ease, left 0.5s ease;    }\n\n        .navigation ul li.active a .circle {\n                           transform: translateY(-37px) scale(1);\n        }\n\n     "
      }}
        />
        <div className="navigation">
          <a href="/"><img
            src={Umic}
            className="logo"
            alt="Logo"
            width="60"
            height="60"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              objectFit: "contain",
            }}
          /> </a>
          <a href="/Teams/Sedrica"><img
            src={Sedrica}
            className="logo"
            alt="Logo"
            width="150"
            height="100"
            style={{
              position: "absolute",
              left: "80px",
              top: "50%",
              transform: "translateY(-50%)",
              objectFit: "contain",
            }}
          /> </a>
          <ul>
            <li
              className={`list ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleClick(0)}
            >
              <Link to="/">
                <span className="icon">
                  <ion-icon name="home"></ion-icon>
                </span>
                <span className="text">UMIC</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              <Link to="/competitions">
                <span className="icon">
                  <ion-icon name="trophy"></ion-icon>
                </span>
                <span className="text">Competition</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              <Link to="/Teams/Sedrica">
                <span className="icon">
                  <ion-icon name="car-sport"></ion-icon>
                </span>
                <span className="text">SeDriCa</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              <Link to="/Subsystems">
                <span className="icon">
                <ion-icon name="grid"></ion-icon>
                </span>
                <span className="text">Subsystems</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 4 ? "active" : ""}`}
              onClick={() => handleClick(4)}
            >
              <Link to="/MediaBlog">
                <span className="icon">
                <ion-icon name="newspaper"></ion-icon>
                </span>
                <span className="text">Blogs</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 5 ? "active" : ""}`}
              onClick={() => handleClick(5)}
            >
              <Link to="/Gallery">
                <span className="icon">
                <ion-icon name="images"></ion-icon>
                </span>
                <span className="text">Gallery</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 6 ? "active" : ""}`}
              onClick={() => handleClick(6)}
            >
              <Link to="/sponsors">
                <span className="icon p">
                <img src={io}  alt="logo" width={"68rem"} />
                </span>
                <span className="text">Sponsors</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 7 ? "active" : ""}`}
              onClick={() => handleClick(7)}
            >
              <Link to="/ResearchGroup">
                <span className="icon">
                <ion-icon name="flask"></ion-icon>
                </span>
                <span className="text">Research</span>
                <span className="circle" />
              </Link>
            </li>
            <li
              className={`list ${activeIndex === 8 ? "active" : ""}`}
              onClick={() => handleClick(8)}
            >
              <Link to="/Benefactors">
                <span className="icon">
                <ion-icon name="hand-right"></ion-icon>
                </span>
                <span className="text">Benefactors</span>
                <span className="circle" />
              </Link>
            </li>

          </ul>

          <div className="hamburger-menu icon" onClick={toggleMenu} style={{ position: "absolute",top:"20px", height: "50px" }}>
            <img height="40px" width="40px" style={{ bottom: "100px" }} src={bars} alt="Bars" />
          </div>
        </div>

        <div ref={menuRef} className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => handleClick(0)}>UMIC</Link>
          <Link to="/competitions" onClick={() => handleClick(1)}>Competition</Link>
          <Link to="/Teams/Sedrica" onClick={() => handleClick(2)}>SeDriCa</Link>
          <Link to="/Subsystems" onClick={() => handleClick(3)}>Subsystems</Link>
          <Link to="/MediaBlog" onClick={() => handleClick(4)}>Blogs & Media</Link>
          <Link to="/Gallery" onClick={() => handleClick(5)}>Gallery</Link>
          <Link to="/sponsors" onClick={() => handleClick(6)}>Sponsors</Link>
          <Link to="/ResearchGroup" onClick={() => handleClick(7)}>Research</Link>
          <Link to="/Benefactors" onClick={() => handleClick(8)}>Benefactors</Link>
          <a style={{ color: "red" }} href={location.pathname} onClick={() => handleClick(activeIndex)}>Close</a>
        </div>
      </div>
      <Helmet>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Helmet>
    </div>
  );
}

export default MyClass;
