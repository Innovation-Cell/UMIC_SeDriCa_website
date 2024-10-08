import "./Compicard.css";
import asme from "../../assets/asme.jpg"
import auto from "../../assets/auto.jpeg"
import rise from "../../assets/rise.png"
import flip from "../../assets/flip.jpg"
import fira from "../../assets/c2.jpg"
import f1 from "../../assets/c6.jpg"
function Compi() {
  return (
    <>
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

      <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6 px-0">
              <h1 className="display-4">IGVC Auto Nav</h1>
              <p className="lead my-3">
              The Intelligent Ground Vehicle Competition (Auto-Nav Challenge) competition requires student teams to design, fabricate, and program an autonomous unmanned ground robotic vehicle. The robot must negotiate around an outdoor obstacle course under a prescribed time while maintaining a minimum speed of one mph over a section and a maximum speed of five mph.
              We finished 4th worldwide at IGVC Auto-Nav 2016. In 2017, "SeDriCa" participated in all three events and secured first place in the Autonomous Navigation Challenge and second place in the Design Challenge as well as in the Interoperability Profiles Challenge.
 </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={auto} alt="Competition" className="round img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6 px-0">
              <h1 className="display-4">Mahindra Rise Challenge</h1>
              <p className="lead my-3">
              The MRC is a platform for students to demonstrate their creativity, innovation, and strategic thinking. The competition aims to identify the best and brightest minds to help Mahindra Group businesses scale up and grow.
              The challenge consists of 5 stages , basically the task is to autonomously maneuver Mahindra’s electric car, Mahindra E2O, on Indian roads.  </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={rise} alt="Competition" className="round img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6 px-0">
              <h1 className="display-4">Flipkart Grid Robotics Challenge</h1>
              <p className="lead my-3">
              GRiD is Flipkart’s Flagship Engineering Campus Challenge which provides you with the opportunity to apply your technical knowledge and skills, to compete and complete key challenges.
              The Robotics Track will have 2 elimination rounds to test you on your technical, analytical, and ideation skills before the Grand Finale where the finalists will get to present their solutions to the panel of domain experts at Flipkart.
              </p>
           </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={flip} alt="Competition" className="round ettt" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6 px-0">
              <h1 className="display-4">FIRA RoboWorld Cup</h1>
              <p className="lead my-3">
              The Federation of International Robot Sports Association (FIRA) – founded by Prof. Jong-Hwan Kim, KAIST, Korea in 1996 – is the oldest robot soccer competition in the world. 
              The vision of FIRA is to take the spirit of robotic science and technology, mechatronics and artificial intelligence to the younger generation, by identifying, expanding and directing potential and talented people in robotics and artificial intelligence, and by emphasizing on meeting the important and practical needs in the community and the problems that exist in member countries with the use of their creative and elite network in this domain and the development of a technology-based economy by 2050.</p>            </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={fira} alt="Competition" className="round ettt" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6 px-0">
              <h1 className="display-4">F1-Tenth</h1>
              <p className="lead my-3">

F1/10 F1TENTH Autonomous Racing is a semi-regular competition organized by an international community of researchers, engineers, and autonomous systems enthusiasts. The teams participating in 19th F1TENTH Grand Prix at MS 2024 will build a 1:10 scaled autonomous race car according to a given specification and write software for it to fulfill the objectives for the competition: Don’t crash and minimize laptime.
</p>
           </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={f1} alt="Competition" className="round ettt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compi;
