import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../path-to-your-useFetch-hook";

const Demo = () => {
  const { id } = useParams();
  const { data: packagesData, loadMessage, isError } = useFetch(`http://localhost:8000/packagesData/${id}`);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingCount, setBookingCount] = useState(1);
  const navigate = useNavigate();

  const handleBookPackage = () => {
    if (selectedPackage && selectedPackage.ticketsAvailable >= bookingCount) {
      // Update ticketsAvailable
      const updatedPackages = packagesData.map((pkg) =>
        pkg.id === selectedPackage.id
          ? { ...pkg, ticketsAvailable: pkg.ticketsAvailable - bookingCount }
          : pkg
      );
      // Assuming you have a function to update data in your useFetch hook
      // replace 'updatePackagesData' with the actual function name
      // updatePackagesData(updatedPackages);

      // Add booking record (dummy data for demonstration)
      const bookingRecord = {
        packageId: selectedPackage.id,
        bookingCount,
        date: new Date().toLocaleDateString(),
      };
      console.log('Booking:', bookingRecord);

      // Clear selected package after booking
      setSelectedPackage(null);
      navigate('/itenary');
    } else {
      alert('Tickets not available or invalid booking count');
    }
  };

  return (
    <>
      {/* Display Package Details */}
      <article>
        <h2>Destination: {packagesData?.destination}</h2>
        <h3>Itinerary: {packagesData?.itinerary}</h3>
        <h3>Price: ${packagesData?.price}</h3>
        <h3>Accommodations: {packagesData?.accomodations}</h3>
        <h3>Tickets-Available: {packagesData?.ticketsAvailable}</h3>
        <h3>Ratings: {packagesData?.ratings}</h3>
        <button onClick={handleBookPackage}>Book Now</button>
      </article>

      {/* Booking Section */}
      <div className='bookingpackage'>
        <h3>Book Package</h3>
        <label>Number of Travelers:</label>
        <input
          type="number"
          min="1"
          max={packagesData?.ticketsAvailable}
          value={bookingCount}
          onChange={(e) => setBookingCount(parseInt(e.target.value, 10))}
        />
        <button onClick={handleBookPackage}>Book Now</button>
      </div>
    </>
  );
}

export default Demo;
