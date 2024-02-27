import Footer from "../../Components/Footer/Footer";
import MainHome from "../../Components/Main/Main";
import AboutImg from '../../assets/1.jpg';
import './Contact.css'
import ContactForm from "./ContactForm";
const Contact = () => {
  return ( 
    <>
    
  <MainHome
cName="hero-mid"
heroImg ={AboutImg}
title = "Contact"
// text = "About"
url ="/"
// ButtonText = "Travel plan"
// btnClass ="show"
/>  
<ContactForm/>
<Footer/>
  </>
   );

}
 
export default Contact;