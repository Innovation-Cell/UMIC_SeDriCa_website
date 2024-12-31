import Umic from "../assets/Umic.png"
import logo from "../assets/p.png"
function Logo(){
    <div style={{
        display: "flex",
        backgroundColor: "white",
        width: "50px",
        borderRadius: "10px"
    }}>
    <a href="/"><img src={logo} className="logo" alt="Logo" width="80" height="80" style={{ position: "absolute", left: "10px", top: "50%" ,transform: "translateY(-50%)",
    objectFit: "contain"}}/> </a>
    <a href="/Teams/Sedrica"><img src={Umic} alt="UMIC"/> </a>
    </div>
}

export default Logo;