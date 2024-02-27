import TourData from "../../Components/Destination/DestinationDataTours";
import DestinationTours from "../../Components/Destination/DestinationTours";
import Footer from "../../Components/Footer/Footer";
import MainHome from "../../Components/Main/Main";
import AboutImg from'../../assets/keywest.jpg'

const Serviced = () => {
  return (  
    <>
      
  <MainHome
cName="hero-mid"
heroImg ={AboutImg}
title = "Services"
// text = "About"
url ="/"
// ButtonText = "Travel plan"
// btnClass ="show"
/>         
<DestinationTours/>
    <Footer/>
    </>
  );
}
 
export default Serviced;