import Navbar from "./Components/Navbar/Navbar";
import {Routes ,Route} from 'react-router-dom'
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Service from "./routes/Services/Services";
import Contact from "./routes/Contacts/Contact";
import Booking from "./routes/Booking/Booking";
import Packages from "./routes/Packages/Packages";
import Itenary from "./routes/Itenary/Itenary";
import ItenaryList from "./Components/itenaryList/itenaryList";


const App = () => {
  return ( 
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/booking/:id" element={<Booking/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path= "/itenary" element={<Itenary/>}/>
        <Route path= "/itenaryList" element={<ItenaryList/>}/>
      </Routes>
    <Navbar/>
    
    
    
    </div>

    
    </>
   );
}
 
export default App;