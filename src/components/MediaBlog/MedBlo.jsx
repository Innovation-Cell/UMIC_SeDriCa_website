import Footer from "../Footer";
import MyClass from "../Nav";
import "./MedBlo.css";
import phi from "../../assets/phi.png"
import phi1 from "../../assets/phi1.png"
function MedBlo() {
  return (
    <>
      <MyClass />
      <br />
      <div className="alp"> {/* Added Bootstrap container to prevent overflow */}
        <div className="ro"> 
          <div className="col-md-8 px-md-4"> {/* Changed px-md-5 to px-md-4 to avoid excessive padding */}

          <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">
              Kudan announces sponsorship of the autonomous vehicle development group, SeDriCa IIT Bombay backed up by industry leaders
              </h2>
              <p className="blog-post-meta">
                May 2,2021
              </p>
              <a href="https://www.kudan.io/blog/kudan-sponsors-sedrica/"  target="_blank" rel="noreferrer">

              <img
                src={phi1} 
                width="100%"
                height="auto"
                style={{ border: "none" }}
                alt="Embedded Webpage"
                /></a>
              <p>
                Kudan is pleased to announce that since January 2021, Kudan has become a sponsor of Team SeDrica, IIT Bombay autonomous vehicle development group and has provid… Source: Kudan global
              </p>
              <hr />
            </article>



          <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">
                India’s elite IITs are on a quest to develop self-driving cars for the country’s crazy roads
              </h2>
              <p className="blog-post-meta">
                March 8, 2019 by Devjyot Ghoshal
              </p>
              <a href="https://qz.com/india/924917/the-indian-institutes-of-technology-iits-are-on-a-quest-to-develop-self-driving-cars-for-the-countrys-crazy-roads"  target="_blank" rel="noreferrer">

              <img
                src={phi} 
                width="100%"
                height="auto"
                style={{ border: "none" }}
                alt="Embedded Webpage"
                /></a>

              <p>
                It's a useful fixation to have when global carmakers and tech giants are also obsessing over driverless cars. Source: Quartz
              </p>
            </article>
            
            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">
                IIT Bombay to represent India at international level in USA after a win at Asia level
              </h2>
              <p className="blog-post-meta">
                February 7, 2019 by Bishakha Nihalani
              </p>
              <iframe
                src="https://www.theindianwire.com/education/iit-bombay-represent-india-international-level-usa-win-asia-level-99993/"
                width="100%"
                height="auto"
                style={{ border: "none" }}
                title="Embedded Webpage"
              ></iframe>
              <p>
              After witnessing a great win by 14 BTech students, working with the Unmesh Mashruwala Innovation Cell (UMIC), IIT Bombay at the Asia Pacific regionals of the Student Design Competition (SDC), an event organized by the American Society of Mechanical Engineering (ASME), which was held in Vellore Institute of Technology from February 1 to 3, the team is all set to represent India and the Asia Pacific region in the world finals of ASME-SDC,19’ to be held in Utah, USA, in November.
              </p>
              <hr />
            </article>

          </div>

          <div className="col-md-4"> 
            <div className="position-sticky" style={{ top: "2rem", marginBottom: "4rem" }}>
              <div className="p-4 mb-3 bg-body-tertiary rounded mb-4">
                <h4>About Us</h4>
                <p className="mb-0">
                Welcome to Sedrica Insights, the official blog of UMIC Sedrica, IIT Bombay's autonomous car driving team. </p>
                <p className="mb-0">Our blog is dedicated to providing insightful articles, updates, and in-depth analysis on cutting-edge developments in autonomous driving technology, robotics, and artificial intelligence.</p>

                <p className="mb-0">At Sedrica, we’re on a mission to transform the future of transportation through innovation and research in self-driving cars. Our blog not only showcases the progress and achievements of our team but also aims to keep you informed on the latest trends and advancements in the field of autonomous vehicles.</p>

                <p className="mb-0">From behind-the-scenes updates on our research projects to discussions on global autonomous driving challenges, we bring you a unique perspective on the world of self-driving technology. Whether you're a tech enthusiast, an aspiring engineer, or just curious about the future of mobility, there's something here for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MedBlo;
