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
import Pack from "./routes/Packages/Pack";
import Services from "./routes/Services/Services";
import Serviced from "./routes/Services/Serviced";


const App = () => {
  return ( 
    <>
    <div className="App">
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service/:id" element={<Service/>}/>
        <Route path="/serv" element= {<Serviced/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/booking" element={<Booking/>}/> */}
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/pack/:id" element={<Pack/>}/>

        <Route path= "/itenary" element={<Itenary/>}/>
        <Route path= "/itenaryList" element={<ItenaryList/>}/>
      </Routes>
    
    
    
    </div>

    
    </>
   );
}
 
export default App;