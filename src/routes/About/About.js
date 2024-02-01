import MainHome from "../../Components/Main/Main";
import AboutImg from '../../assets/2.jpg';

const About = () => {
  return (  
    <>
<MainHome
cName="hero"
heroImg = {AboutImg}
title = "Your Journey your Story"
text = "Choose your Favourite Destination"
url ="/"
ButtonText = "Travel plan"
btnClass ="show"
/>
    </>
  );
}
 
export default About;