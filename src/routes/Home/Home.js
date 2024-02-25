import MainHome from "../../Components/Main/Main";
import Video from '../../assets/maldivesVideo.mp4'


const Home = () => {
  return ( 
<>
<MainHome
cName="hero"
heroVid = {Video}
// heroImg = {{}}
title = "Your Journey your Story"
text = "Choose your Favourite Destination"
url ="/packages"
ButtonText = "Travel plan"
btnClass ="show"
/>
</>

   );
}
 
export default Home;