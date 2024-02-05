import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Services.css';

const Service = () => {
  const [destination, setDestination] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [price, setPrice] = useState("");
  const [accomodations, setAccommodations] = useState("");
  const [ticketsAvailable, setTicketsAvailable] = useState("");
  const [count, setCount] = useState('1');
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      name,
      phone,
      email,
      destination,
      itinerary,
      price,
      accomodations,
      ticketsAvailable
    };

    setIsPending(true);

    // Assuming this is an async operation
    fetch("http://localhost:9000/itenaryDetails", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking)
    }).then(() => {
      setIsPending(false);

      // Assuming these are defined in your context
      // Update ticketsAvailable and packages here
      // const updatedPackages = packages.map((pkg) =>
      //   pkg.id === selectedPackage.id
      //     ? { ...pkg, ticketsAvailable: pkg.ticketsAvailable - bookingCount }
      //     : pkg
      // );
      // setPackages(updatedPackages);

      // Add booking record (dummy data for demonstration)
      // const bookingRecord = {
      //   packageId: selectedPackage.id,
      //   bookingCount,
      //   date: new Date().toLocaleDateString(),
      // };
      // console.log('Booking:', bookingRecord);

      // Clear selected package after booking
      // setSelectedPackage(null);

      console.log('New entry added');
      
      // Update the entries state with the latest data
      setEntries([...entries, booking]);

      // Navigate to the desired route after successful submission
      navigate('/itenary');
    }).catch((error) => {
      setIsPending(false);
      console.error('Error adding booking:', error);
    });
  };

  return (
    <>
      <div className="submit-container">
        <h2>Add Booking</h2>
        <form onSubmit={handleSubmit}>
        <label>Name </label>
    <input type="text" required placeholder="Name" value={name}
    onChange={(e)=>{
      setName (e.target.value);
    }}
    />
    <label>Phone.no</label>
    <input type="text" required placeholder="#####" value={phone}
    onChange={(e)=>{
      setPhone(e.target.value);
    }}
    />
    <label>Email</label>
    <input type="text" required placeholder="" value={email}
    onChange={(e)=>{
      setEmail(e.target.value);
    }}
    />
    <select value={accomodations}  onChange={(e)=>{
      setAccommodations(e.target.value);
    }}>
      <option value = "Luxury Hotel">Hotel</option>
      <option value = "3 Star Hotel">3 Star Hotel</option>
      <option value = "Motel "> Motel</option>
    </select>
          <button className="bg-orange-500 p-3 ml-4" disabled={isPending}>
            {isPending ? 'Adding Book...' : 'Add Book'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Service;
