// import react from 'react'
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
      <h1 className="navbar-logo">LOGO</h1>

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
      <button>Sign-up</button>
      </ul>
    
    </div>
    </>
   );
}
 
export default Navbar;