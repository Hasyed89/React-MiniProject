// Packages.js
import React, { useState } from 'react';
import './Packages.css';
import { packagesData } from '../../datadb/data';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

const Packages = () => {
  const [packages, setPackages] = useState(packagesData);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingCount, setBookingCount] = useState(1);

  // Function to handle clicking on a package
  const handlePackageClick = (packageId) => {
    const selected = packages.find((pkg) => pkg.id === packageId);
    setSelectedPackage(selected);
  };

  return (
    <div className='package-header'>
      <h1>Travel Packages</h1>

      {/* Package List */}
      <div className='available-packages'>
        <h2>Available Packages</h2>
        <ul>
          {packages.map((pkg) => (
            <li key={pkg.id} onClick={() => handlePackageClick(pkg.id)}>
              {pkg.destination} - ${pkg.price}
            </li>
          ))}
          <Link to={'/booking'}>
            <button>Book Now </button>
          </Link>
        </ul>
      </div>

      {/* Selected Package Details */}
      {selectedPackage && (
        <>
          {/* Render Booking component with curly braces */}
          <Booking
            selectedPackage={selectedPackage}
            bookingCount={bookingCount}
            setBookingCount={setBookingCount}
            packages={packages}
            setPackages={setPackages}
            setSelectedPackage={setSelectedPackage}
          />
          <div className='package-detail'>
            <h2>Package Details</h2>
            <p>Destination: {selectedPackage.destination}</p>
            <p>Itinerary: {selectedPackage.itinerary}</p>
            <p>Accommodations: {selectedPackage.accommodations}</p>
            <p>Tickets Available: {selectedPackage.ticketsAvailable}</p>
            {/* Booking Section */}
            <div className='bookingpackage'>
              <h3>Book Package</h3>
              <label>Number of Travelers:</label>
              <input
                type='number'
                min='1'
                max={selectedPackage.ticketsAvailable}
                value={bookingCount}
                onChange={(e) => setBookingCount(parseInt(e.target.value, 10))}
              />
              {/* Remove onClick handler from button as it's handled in Booking component */}
              <button>Book Now</button>
            </div>
            {/* Reviews Section */}
            {/* ... */}
          </div>
        </>
      )}
    </div>
  );
};

export default Packages;
