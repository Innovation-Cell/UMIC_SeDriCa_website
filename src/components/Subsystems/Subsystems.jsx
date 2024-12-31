import Footer from "../Footer"
import MyClass from "../Nav";
import './Subsystems.css'
import per from "../../assets/Subsystem/per.jpeg"
import mp from "../../assets/Subsystem/mp.jpg"
import con from "../../assets/Subsystem/controls.png"
import mech from "../../assets/Subsystem/mech.png"
import comm from "../../assets/Subsystem/comm.png"

function Subsytems(){
    return(
        <>
            <MyClass/>
            <h1 style={{marginLeft:"1.5rem",marginTop:"1rem",fontWeight:"800"}}>Subsystems</h1>



            {/* CompiCard */}
            <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6 px-0">
              <h1 className="display-4">Perception</h1>
              <p className="lead my-3">
                In advanced autonomous systems, perception plays a critical role in understanding and interacting with the environment. By applying cutting-edge image processing methods, these systems can accurately interpret their surroundings. A variety of sensors, such as cameras, LiDAR, and radar, are employed to gather diverse data, which is then processed to create a precise and comprehensive representation of the environment. This enables the system to detect and track objects, identify obstacles, and make informed decisions in real-time. Accurate perception is key to ensuring smooth navigation and safety in complex, dynamic environments.
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={per} alt="Competition" className="round img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            

            {/* Image Column */}
            <div className="col-md-6 card-right justify-content-space-evenly">
              <div className="d-flex justify-content-start align-items-center h-100">
                <img src={mp} alt="Competition" className="round img-fluid" />
              </div>
            </div>
            {/* Text Column */}
            <div className="col-md-6 px-0 py-3">
              <h1 className="display-4">Motion Planning</h1>
              <p className="lead my-3">
              Motion planning is a crucial stage that follows perception in robotics, where perceived data offers valuable insights into the system's surroundings. Once the environment is understood, the challenge becomes determining the feasibility of executing a maneuver. This involves assessing various factors such as obstacle locations, path constraints, and real-time dynamics like speed and direction. Advanced algorithms evaluate multiple potential trajectories, optimizing for factors like safety, efficiency, and smoothness. By continuously processing this data, the system can adapt its path in real-time, ensuring reliable navigation through dynamic environments while avoiding collisions and optimizing travel time.
              </p>
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
              <h1 className="display-4">Controls</h1>
              <p className="lead my-3">
              The controls subsystem serves as the crucial bridge between software and hardware, translating high-level decisions into precise physical actions. Its primary task is to ensure the system accurately follows the optimal path provided by the motion planning module. This involves controlling key parameters like velocity and steering to achieve smooth, efficient movement while maintaining safety. In doing so, it must account for the performance and limitations of electrical components, such as motors and actuators, ensuring they function harmoniously. Through continuous feedback loops, the subsystem adjusts to changes in real-time, ensuring the system remains on course, responsive to both internal commands and external environmental factors.
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img src={con} alt="Competition" className="round img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative m-3">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          {/* Row to arrange text on the left and image on the right */}
          <div className="row">
            

            {/* Image Column */}
            <div className="col-md-6 card-right justify-content-space-evenly">
              <div className="d-flex justify-content-start align-items-center h-100">
                <img src={mech} alt="Competition" className="round img-fluid" />
              </div>
            </div>
            {/* Text Column */}
            <div className="col-md-6 px-0 py-3">
              <h1 className="display-4">Mechatronics</h1>
              <p className="lead my-3">
              The mechatronics subsystem integrates mechanics and electronics to enable seamless automation and enhance overall performance. A key focus is designing and implementing Drive-By-Wire (DBW) systems, which electronically control critical functions like throttle, brakes, and steering. These systems are powered by custom-designed PCBs, ensuring precision and reliability in operation. Additionally, the subsystem establishes and utilizes a Controller Area Network (CAN) to manage communication between various actuators and sensors. This network allows for real-time data exchange, enabling accurate control of the vehicle’s movements and ensuring efficient coordination of the system’s mechanical and electronic components.
              </p>
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
              <h1 className="display-4">Communications</h1>
              <p className="lead my-3">
              Communication systems play a vital role in enabling vehicles to interact with their surroundings within a complex infrastructure. By continuously exchanging data with other autonomous vehicles and roadside infrastructure, the system gains critical insights into traffic conditions, road hazards, and potential obstacles. This real-time communication helps optimize vehicle behavior, adjusting speed, lane positioning, and route selection to avoid collisions and ensure smooth navigation.
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 card-right">
              <div className="d-flex justify-content-center align-items-center h-100 rounded">
                <img src={comm} alt="Competition" className="round img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>





            <Footer/>
        </>
    )
}

export default Subsytems