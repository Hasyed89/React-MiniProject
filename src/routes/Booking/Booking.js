// Booking.js
// import React from 'react';
// import './Booking.css'
// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from '../../Components/useFetch';
// const Booking =  () => {
//   const {id} = useParams();
//   const navigate = useNavigate();
//   const { data: packagesData, loadMessage, isError }=useFetch('http://localhost:8000/packagesData/' +id)

// const handleBooking = ()=>{

//   // fetch('http://localhost:8000/books/'+ books.id,{

//   fetch('http://localhost:8000/packagesData/'+ packagesData.id,{

//     method:'GET'
    
//   }).then(()=>{
//     navigate('/itenary');
//   })
// }
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

//     <button onClick={
//       handleBooking
//     }>Book-Now</button>
//   </article>
//   </div>
// )}
// </div>
//  </>
// );
// }
      
// export default Booking;

import React from 'react';
import './Booking.css';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../../Components/useFetch';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: packagesData, loadMessage, isError } = useFetch(`http://localhost:8000/packagesData/${id}`);

  const handleBooking = () => {
    fetch(`http://localhost:8000/packagesData/${packagesData.id}`, {
      method: 'POST' // Assuming you are creating a booking, so using POST method
    }).then(() => {
      navigate('/service');
    });
  };

  return (
    <div className='Package-detail'>
      {loadMessage && <div>Loading ...</div>}
      {isError && <div>{isError}</div>}
      {packagesData && (
        <div key={packagesData.id}>
          <article>
            <h2>Destination: {packagesData.destination}</h2>
            <h3>Itinerary: {packagesData.itinerary}</h3>
            <h3>Price: ${packagesData.price}</h3>
            <h3>Accommodations: {packagesData.accomodations}</h3>
            <h3>Tickets-Available: {packagesData.ticketsAvailable}</h3>
            <h3>Ratings: {packagesData.ratings}</h3>
            <button onClick={handleBooking}>Book-Now</button>
          </article>
        </div>
      )}
    </div>
  );
};

export default Booking;

