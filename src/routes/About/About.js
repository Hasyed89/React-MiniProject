import Footer from "../../Components/Footer/Footer";
import MainHome from "../../Components/Main/Main";
import AboutImg from "../../assets/9.jpg";
import AboutUs from "./AboutUs";

const About = () => {
  return (
    <>
      <MainHome cName="hero-mid" heroImg={AboutImg} title="About" url="/" />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
