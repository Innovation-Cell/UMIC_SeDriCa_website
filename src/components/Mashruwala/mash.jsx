import "./mash.css"
import MyClass from "../Nav";
import Footer from "../Footer";
import Raj from "../../assets/Raj.jpg"

function Mash(){
    return(
        <>
     <MyClass/>
    <div class="col-md-6 mx-auto my-5 text-center">
      <h1 class="fw-bold">Raj Mashruwala</h1>
      <img src={Raj} alt="mast" style={{width: "50%", borderRadius: "5px" , boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 15px"}} />
      <div className="mt-4 mx-3"><p> 
      Raj Mashruwala, a distinguished alumnus of IIT Bombay's Mechanical Engineering class of 1975, has played a pivotal role in the growth and success of Team SeDriCa through his unwavering support of the Unmesh Mashruwala Innovation Cell (UMIC).
      </p>
      <p>  Named in honor of his father, UMIC stands as a testament to Raj Mashruwala’s commitment to fostering innovation and empowering the next generation of engineers. His deep connection to the institute and his passion for innovation have made him a steadfast benefactor, offering invaluable financial support as well as technical tools that have transformed the team's ability to achieve ambitious goals.
      </p>
      <p> Raj Mashruwala’s generosity extends beyond funding. He has also been instrumental in helping the team build crucial relationships with industrial partners, providing opportunities for collaboration and real-world application of the technologies developed by UMIC. His vision has enabled the team to access cutting-edge resources and training, further enhancing their research and development capabilities.
      </p>
    <p>One of his most significant contributions is the arrangement of a dedicated workspace and an advanced mechanical garage, where the team can freely experiment, innovate, and bring their autonomous vehicle projects to life. This physical space has been a game-changer for SeDriCa, creating a professional and well-equipped environment that fosters creativity and technical excellence.
        </p>
    <p> The entire team owes a deep debt of gratitude to Raj Mashruwala, whose continuous mentorship, guidance, and goodwill have been instrumental in shaping their success. His support has not only helped them win national and international competitions but has also set the stage for future achievements. The team is honored to carry forward the legacy of innovation that he has so generously nurtured.
        </p>  </div>
    </div>
    <Footer/>
        </>
    )
}

export default Mash;