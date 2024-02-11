import React, { useState } from 'react';
import './Contact.css'
import { packagesData } from '../../datadb/packageData';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
console.log(packagesData);
  const [packages, setPackages] = useState(packagesData);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingCount, setBookingCount] = useState(1);
  const [reviews, setReviews] = useState([]);
const navigate= useNavigate();


  const handlePackageClick = (packageId) => {
    const selected = packages.find((pkg) => pkg.id === packageId);
    setSelectedPackage(selected);
    // navigate('/booking')

  };

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

  const handleReviewSubmit = (rating, comment) => {
    // Add review (dummy data for demonstration)
    const newReview = {
      packageId: selectedPackage.id,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };
    setReviews([...reviews, newReview]);
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
        </ul>
      </div>

      {/* Selected Package Details */}
      {selectedPackage && (
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
              type="number"
              min="1"
              max={selectedPackage.ticketsAvailable}
              value={bookingCount}
              onChange={(e) => setBookingCount(parseInt(e.target.value, 10))}
            />
            <button onClick={handleBookPackage}>Book Now</button>
          </div>

          {/* Reviews Section */}
          <div className='reviews'>
            <h3>Reviews</h3>
            {reviews.map((review, index) => (
              <div key={index}>
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
                <p>Date: {review.date}</p>
              </div>
            ))}

            {/* Review Form */}
            <div className='submit-review'>
              <h4>Submit a Review</h4>
              <label>Rating:</label>
              <input type="number" min="1" max="5" />
              <label>Comment:</label>
              <textarea />
              <button>Submit Review</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default Contact;

// Sample data for demonstration purposes


