import Chero from "../Competitions/CompiHero";
import asme from "../../assets/asme.jpg"
import MyClass from "../Nav";
import Footer from "../Footer";
import './Mpage.css'

function MPage(){
    return(
        <>
            <MyClass/>
            <Footer/>
            <Chero/>
            <div className="position-relative m-3">
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                {/* Row to arrange text on the left and image on the right */}
                <div className="row">
                    {/* Text Column */}
                    <div className="col-md-6 px-0">
                    <h1 className="display-4">Student Design Challenge</h1>
                    <p className="lead my-3">
                        The American Society of Mechanical Engineers. Each team is expected to ideate, design, construct, and operate a prototype that provides solutions to all the intricate problem statements stated. We were declared as the first runner-up in the World Finals in 2012 and 2013, then in 2017 the team was crowned as the champions in the Asia-Pacific region as well as the World Champions. In 2019 also the team was crowned as the Asia-Pacific Champions. 4th Globally at ASME 2021.
                    </p>
                    </div>

                    {/* Image Column */}
                    <div className="col-md-6 card-right">
                    <div className="d-flex justify-content-center align-items-center w-500%">
                        <img src={asme} alt="Competition" className="round img-fluid" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default MPage;