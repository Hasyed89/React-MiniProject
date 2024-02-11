import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Components/useFetch";
const Services = ({ selectedPackageProp, handlePackageClick }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: packagesData, loadMessage, isError } = useFetch(`http://localhost:8000/packagesData/${id}`);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState(packagesData);
  const [bookingCount, setBookingCount] = useState(1);

  // Ensure that selectedPackageProp is defined before accessing its properties
  const ticketsAvailable = selectedPackageProp &&selectedPackageProp?.ticketsAvailable ;
console.log(selectedPackageProp ,":selectedPackageProp");
console.log(packages ,":is the power");
console.log(packagesData ,":is the power");
console.log(ticketsAvailable ,":is the power");



  const handleBookPackage = (packageId) => {
    console.log(handlePackageClick(),"hello");

    if (selectedPackageProp && ticketsAvailable >= bookingCount) {
      // Update ticketsAvailable
      const updatedPackages = packages.map((pkg) =>
        pkg.id === selectedPackageProp.id ? { ...pkg, ticketsAvailable: pkg.ticketsAvailable - bookingCount } : pkg
      );
      setPackages(updatedPackages);
      console.log(setPackages,"ujuj");
      // Add booking record (dummy data for demonstration)
      const bookingRecord = {
        packageId: selectedPackageProp.id,
        bookingCount,
        date: new Date().toLocaleDateString(),
      };
      console.log("Booking:", bookingRecord);
      handlePackageClick();
      // Clear selected package after booking
      setSelectedPackage(null);
    } else {
      alert("Tickets not available or invalid booking count");
    }
  };

  return (
    <>
      <div className="Package-detail">
      <h3>Tickets Available: {selectedPackageProp?.ticketsAvailable || 0}</h3>

        {loadMessage && <div>Loading ...</div>}
        {isError && <div>{isError}</div>}
        {packagesData && (
          <div key={packagesData.id}>
            <article>
              <h2>Destination: {packagesData.destination}</h2>
              <h3>Itinerary: {packagesData.itinerary}</h3>
              <h3>Price: ${packagesData.price}</h3>
              <h3>Accommodations: {packagesData.accommodations}</h3>
              <h3>Tickets Available: {ticketsAvailable}</h3> {/* Use ticketsAvailable instead of selectedPackageProp.ticketsAvailable */}
              <h3>Ratings: {packagesData.ratings}</h3>
              <input
                type="number"
                min="1"
                max={ticketsAvailable} // Use ticketsAvailable instead of selectedPackageProp.ticketsAvailable
                value={bookingCount}
                onChange={(e) => setBookingCount(parseInt(e.target.value, 10))}
              />
              <button onClick={handleBookPackage}>Book Now</button>
            </article>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;

