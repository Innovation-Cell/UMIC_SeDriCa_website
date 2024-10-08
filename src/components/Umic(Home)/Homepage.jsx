import Footer from '../Footer';
import Logo from '../Logo';
import MyClass from '../Nav';
import Content from "./Content";
import Hero from "./Hero";

function Homepage(){
    return(
        <>
        <MyClass />
        <Logo/>
        <Hero/>
        <Content/>
        <Footer/>
        </>
    )
}

export default Homepage;