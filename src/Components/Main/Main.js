import './Main.css'
import Video from '../../assets/maldivesVideo.mp4'
// import { menuItems } from '../Navbar/menuItems';
const MainHome = (props) => {
  return ( 
    <>
    <div className={props.cName}>
    <video autoPlay loop id="video">
        <source src={props.heroVid} type="video/mp4"/>
      </video>
      {/* <img src={props.heroImg} alt='/' /> */}
    </div> 
    <div className="hero-text">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnClass} >
        {props.ButtonText}
      </a>
    </div>
    </>
   );
}
 
export default MainHome;