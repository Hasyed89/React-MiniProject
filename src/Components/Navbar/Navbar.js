import react from 'react'
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems';
import './Navbar.css'
import { useState } from 'react';
const Navbar = () => {
  const [clicked,setclicked] = useState(false)

  const handleClicked = ()=>{
    setclicked(!clicked);
  }
  return ( 
    <>
    <div className="NavbarItems">
    
      <img  className = "navbar-logo"src="https://i.pinimg.com/originals/8f/17/98/8f1798a79cd8ebc06ea4cb03df81e15f.jpg" alt="/Logo.jpg" />

      <div className="menu-icons" onClick={handleClicked}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
      <ul className={clicked ? "nav-menu active":"nav-menu"}>
        {menuItems.map((items,index)=>{
          return(
            
             <li key={index}>
        <Link className={items.cName} to={items.url}>
        
        <i className={items.icon}>
           </i>
          {items.title}
          </Link>
        </li>
            
          );
        })}
      </ul>
    
    </div>
    </>
   );
}
 
export default Navbar;