import Footer from "../../Components/Footer/Footer";
import MainHome from "../../Components/Main/Main";
import AboutImg from '../../assets/9.jpg';
import AboutUs from "./AboutUs";
// import './About.css'

const About = () => {
  return (  
    <>
<MainHome
cName="hero-mid"
heroImg = {AboutImg}
title = "About"
url ="/"
// ButtonText = "Travel plan"
// btnClass ="show"
/>
<AboutUs/>
<Footer/>
   </> 
  );
}
 
export default About;