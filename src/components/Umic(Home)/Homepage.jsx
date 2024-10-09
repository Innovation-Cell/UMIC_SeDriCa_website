import Footer from '../Footer';
import Logo from '../Logo';
import MyClass from '../Nav';
import Content from "./Content";
import Hero from "./Hero";
import SedLoader from '../Preloader/SedLoader.jsx';
import intro from '../../assets/Intro.gif'
import img from '../../assets/Intro1.gif'

function Homepage(){
    return(
        <>
        <SedLoader gifUrl={img} duration={6100}/>
        <MyClass />
        <Logo/>
        <Hero/>
        <Content/>
        <Footer/>
        </>
    )
}

export default Homepage;