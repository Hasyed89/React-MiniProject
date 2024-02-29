import React from "react";
import "./Booking.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Rating from "../Packages/Ratings/Rating";
import Footer from "../../Components/Footer/Footer";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const packagesData = location.state?.pkg;

  const handleBooking = () => {
    navigate(`/service/${id}`, { state: { pkg: packagesData } });
  };

  return (
    <div className="booking">
      <div className="Package-detail">
        <h1 style={{ marginTop: "1rem" }}>"{packagesData.destination}"</h1>
        <h3 style={{ marginTop: "1rem" }}>{packagesData.itinerary}</h3>

        <img
          className="booking-img"
          src={packagesData.destinationimg}
          alt={packagesData.destination}
        />
        <div style={{ marginTop: "2rem" }}>
          <Rating />
        </div>

        {packagesData && (
          <div>
            <div className="booking-details" key={packagesData.id}>
              <h2 className="itnerary-header"> Itineray Details </h2>
              <h3>Destination: "{packagesData.destination}"</h3>
              <h3>Price: ${packagesData.price}</h3>
              <h3>Accommodations: {packagesData.accommodations}</h3>
              <h3>Tickets Available: {packagesData.ticketsAvailable}</h3>

              <button onClick={handleBooking}>Book Now</button>
              <div className="reviews">
                <div className="comments">
                  <textarea rows={4} cols={49} placeholder="'REVIEW'S' " />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="serviceFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Booking;
