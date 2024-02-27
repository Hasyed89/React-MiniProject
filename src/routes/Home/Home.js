import MainHome from "../../Components/Main/Main";
import AboutImg from '../../assets/maldivesimg.gif';

import Destination from "../../Components/Destination/Destination";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
  return ( 
<>
<MainHome
cName="hero"
heroImg = {AboutImg}

// heroVid = {Video}
title = "Your Journey your Story"
text = "Choose your Favourite Destination"
url ="/packages"
ButtonText = "Travel plan"
btnClass ="show"
/>
<Destination/>
<Footer/>
</>

   );
}
 
export default Home;