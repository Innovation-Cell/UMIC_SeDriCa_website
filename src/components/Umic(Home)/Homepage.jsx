import Footer from '../Footer';
import Logo from '../Logo';
import MyClass from '../Nav';
import Content from "./Content";
import Hero from "./Hero";
import SedLoader from '../Preloader/SedLoader.jsx';
import intro from '../../assets/Intro1.gif'


function Homepage(){
    return(
        <>
        <SedLoader gifUrl={intro} duration={6500}/>
        <MyClass />
        <Logo/>
        <Hero/>
        <Content/>
        <Footer/>
        {/* <img src={intro} style={{width:'100%'}} alt='heh'/> */}
        </>
    )
}

export default Homepage;