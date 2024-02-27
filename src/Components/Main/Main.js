import './Main.css'
const MainHome = (props) => {
  return ( 
    <>
    <div className={props.cName}>
    <img className = "hero-img" src={props.heroImg} alt='' />
    {/* <video autoPlay loop id="video">
        <source src={props.heroVid} type="video/mp4"/>
      </video> */}
      {/* <img className = "hero-img" src={props.heroImg} alt='' /> */}
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