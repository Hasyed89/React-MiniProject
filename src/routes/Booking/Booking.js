// Booking.js
import React from 'react';

const Booking = ({ selectedPackage, bookingCount, setBookingCount, packages, setPackages, setSelectedPackage }) => {
  const handleBookPackage = () => {
    if (selectedPackage && selectedPackage.ticketsAvailable >= bookingCount) {
      // Update ticketsAvailable
      const updatedPackages = packages.map((pkg) =>
        pkg.id === selectedPackage.id
          ? { ...pkg, ticketsAvailable: pkg.ticketsAvailable - bookingCount }
          : pkg
      );
      setPackages(updatedPackages);

      // Add booking record (dummy data for demonstration)
      const bookingRecord = {
        packageId: selectedPackage.id,
        bookingCount,
        date: new Date().toLocaleDateString(),
      };
      console.log('Booking:', bookingRecord);

      // Clear selected package after booking
      setSelectedPackage(null);
    } else {
      alert('Tickets not available or invalid booking count');
    }
  };

  return (
    <div>
      {/* Selected Package Details */}
      {selectedPackage && (
        <div className='package-detail'>
          <h2>Package Details</h2>
          <p>Destination: {selectedPackage.destination}</p>
          <p>Itinerary: {selectedPackage.itinerary}</p>
          <p>Accommodations: {selectedPackage.accommodations}</p>
          <p>Tickets Available: {selectedPackage.ticketsAvailable}</p>
        </div>
      )}

      {/* Booking Section */}
      {selectedPackage && (
        <div className='bookingpackage'>
          <h3>Book Package</h3>
          <label>Number of Travelers:</label>
          <input
            type="number"
            min="1"
            max={selectedPackage.ticketsAvailable}
            value={bookingCount}
            onChange={(e) => setBookingCount(parseInt(e.target.value, 10))}
          />
          {/* Add onClick handler to the button */}
          <button onClick={handleBookPackage}>Book Now</button>
        </div>
      )}
</div>
  );
      }
export default Booking;
