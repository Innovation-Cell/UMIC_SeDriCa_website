
import Footer from '../Footer.jsx'
import SedricaCard from './SedricaTeam.jsx'
// import VantaBackground from './VantaBackground.jsx'
import MyClass from '../Nav.jsx'
import Statistics from './Statistics.jsx'
import Aboutus from './Aboutus.jsx'
import SedHero from './SedHero.jsx'

function Sedrica(){
    return (
        <>
                <MyClass/>
                {/* <VantaBackground/> */}
                <SedHero/>
                <Aboutus/>
                <Statistics/>
                <hr/>
                <SedricaCard/>
                <Footer/>
                
                

        </>
    )
}

export default Sedrica