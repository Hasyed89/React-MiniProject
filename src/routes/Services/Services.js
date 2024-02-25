import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Services.css';
const Services = () => {
  const location = useLocation();
  const packagesData = location.state?.pkg;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bookingCount: 1,
    email: "",
    phone: "",
    name: "",
    date:"",
  });
  const { bookingCount, email, phone, name,date } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Ensure that packagesData is defined before accessing its properties
  const ticketsAvailable = packagesData && packagesData?.ticketsAvailable;
  const destinationimg = packagesData && packagesData?.destinationimg;
  const handleBookPackage = () => {
    if (Object.values(formData).some((value) => !value))
      alert("Some fields are empty");
    else if (packagesData && ticketsAvailable >= bookingCount) {
      const bookingRecord = {
        packageId: packagesData.id,
        bookingCount,
        email,
        phone,
        name,
        destination: packagesData.destination,
        date: new Date().toLocaleDateString(),
      };
      const bookingId = Math.floor(Math.random() * 90000) + 10000;
      sessionStorage.setItem(bookingId, JSON.stringify(bookingRecord));
      console.log("Booking:", bookingRecord);
      navigate("/itenary", { state: bookingRecord });
    } else {
      alert("Tickets not available or invalid booking count");
    }
  };

  return (
    
    <div className="container">
    <img  className = "booking-bg" src="https://thumbs.dreamstime.com/b/online-booking-person-using-internet-website-laptop-flight-search-reservation-208024971.jpg"/>
    <div> <img  className = "booking-bg1" src="https://thumbs.dreamstime.com/b/online-booking-person-using-internet-website-laptop-flight-search-reservation-208024971.jpg"/> </div>
     <img  className = "booking-bg2" src="https://thumbs.dreamstime.com/b/online-booking-person-using-internet-website-laptop-flight-search-reservation-208024971.jpg"/> 
      <div className="submit-container">
      

        
        
                 
      {/* <div className="submit-container"> */}

              
        {packagesData && (
          <div key={packagesData.id}>
            <div className="itenary-booking">
            <img className="submit-img" src={packagesData.destinationimg} alt={packagesData.destination} /> 
              <h2>Destination: {packagesData.destination}</h2>
              {/* <h3>Itinerary: {packagesData.itinerary}</h3> */}
              <h3>Price: ${packagesData.price}</h3>
              <h3>Accommodations: {packagesData.accommodations}</h3>
              {/* <h3>Tickets Available: {ticketsAvailable}</h3>{" "} */}
              {/* Use ticketsAvailable instead of packagesData.ticketsAvailable */}
              <h3>Tickets Available: {packagesData?.ticketsAvailable || 0}</h3>

              <h3>Ratings: {packagesData.ratings}</h3>
              </div>
              <div className="itenary-input">
              <input className="booking-input"
                type="number"
                min="1"
                max={ticketsAvailable} // Use ticketsAvailable instead of packagesData.ticketsAvailable
                value={bookingCount}
                name="bookingCount"
                onChange={handleChange}
                placeholder="No of Bookings"
              />
              <input className="booking-input"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email id"
              />
              <input className="booking-input"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="your name"
              />
              <input className="booking-input"
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="phone number"
              />
                <input className="booking-input"
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
                placeholder="phone number"
              />
             <div className="book-btn">  <button className="booking-btn"disabled={!ticketsAvailable} onClick={handleBookPackage}>
                Book Now
              </button> </div>
            
              </div>
            
          </div>
        )}
      </div>
    </div>

    
  );
};

export default Services;
