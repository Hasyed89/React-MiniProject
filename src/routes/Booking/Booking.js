// import React, { useState } from 'react';
// import './Booking.css'
// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from '../../Components/useFetch';
// import Service from '../Services/Services';
// const Booking =  () => {
//   const {id} = useParams();
//   const navigate = useNavigate();
//   const { data: packagesData, loadMessage, isError } = useFetch(`http://localhost:8000/packagesData/${id}`);
//   const [bookingCount, setBookingCount] = useState(1);
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   // const [packages, setPackages] = useState(packagesData);

// const handleBooking = ()=>{

//   // fetch('http://localhost:8000/books/'+ books.id,{
// // console.log(packages,"kidied");
// console.log(packagesData,"k---0ed");

//   // fetch('http://localhost:8000/packagesData/' + packagesData.id,{

//   //   method:'GET'

//   // }).then(()=>{
//      navigate('/service');
//   // })

// }

// // const handleBookPackage = () => {

// //   if (selectedPackage && selectedPackage.ticketsAvailable >= bookingCount) {
// //     // Update ticketsAvailable
// //     const updatedPackages = packages.map((pkg) =>
// //       pkg.id === selectedPackage.id
// //         ? { ...pkg, ticketsAvailable: pkg.ticketsAvailable - bookingCount }
// //         : pkg
// //     );
// //     setPackages(updatedPackages);

// //     // Add booking record (dummy data for demonstration)
// //     const bookingRecord = {
// //       packageId: selectedPackage.id,
// //       bookingCount,
// //       date: new Date().toLocaleDateString(),
// //     };
// //     console.log('Booking:', bookingRecord);

// //     // Clear selected package after booking
// //     setSelectedPackage(null);
// //   } else {
// //     alert('Tickets not available or invalid booking count');
// //   }
// // };
// return (
//   <>
// <div className=' Package-detail'>

// {loadMessage && <div>Loading ...</div>}
// {isError && <div>{isError}</div>}
// {packagesData &&(
//     <div key={packagesData.id}>
// <article>
//     <h2> Destination: {packagesData.destination}</h2>
//     <h3>Itinerary :{packagesData.itinerary}</h3>
//     <h3>Price : ${packagesData.price}</h3>
//     <h3>Accomodations : {packagesData.accomodations}</h3>  <h3>Tickets-Available : {packagesData.ticketsAvailable}</h3>
//     <h3>Ratings : {packagesData.ratings}</h3>

//     {packagesData &&( <button onClick={ handleBooking}>Book Now</button>)}

//   </article>
//   </div>
// )}
// </div>
// {selectedPackage && <Service selectedPackage={selectedPackage} />}

//  </>
// );
// }

// export default Booking;

import React from "react";
import "./Booking.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Rating from "../Packages/Ratings/Rating";

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
        <div style={{marginTop:"2rem"}}>
          
          <Rating  />
        </div>

        {packagesData && (
          <div>
            <div className="booking-details" key={packagesData.id}>
              <h2 className="itnerary-header"> Itineray Details </h2>
              <h3>Destination: "{packagesData.destination}"</h3>
              <h3>Price: ${packagesData.price}</h3>
              <h3>Accommodations: {packagesData.accommodations}</h3>
              <h3>Tickets Available: {packagesData.ticketsAvailable}</h3>
              {/*              
              <h3>Ratings: {packagesData.ratings}</h3> */}
              <button onClick={handleBooking}>Book Now</button>
              <div className="reviews">
                <div className="comments">
                  <textarea rows={4} cols={49} placeholder="'Comments' " />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
