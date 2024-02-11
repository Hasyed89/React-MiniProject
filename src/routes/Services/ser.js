import React, { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import './Services.css';
import useFetch from "../../Components/useFetch";

const Ser = () => {
  const [destination, setDestination] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [price, setPrice] = useState("");
  const [accomodations, setAccommodations] = useState("");
  const [ticketsAvailable, setTicketsAvailable] = useState("");
  const [count,setCount] =useState('1')
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [entries, setEntries] = useState([]);
  const [bookingCount, setBookingCount] = useState(1);
  
  const {id} = useParams();

  const navigate = useNavigate();
  const { data: packagesData, loadMessage, isError }=useFetch('http://localhost:8000/packagesData/'+id)
  const [packages, setPackages] = useState(packagesData);
  const [selectedPackage, setSelectedPackage] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPackage) {
      console.error("selectedPackage is not set");
      return;
    }
    const booking = {
      name,
      phone,
      email,
      packageId: selectedPackage.id,
      itinerary: selectedPackage.itinerary,
      price: selectedPackage.price,
      accommodations: selectedPackage.accommodations,
      ticketsAvailable: selectedPackage.ticketsAvailable,
      bookingCount

    };

    setIsPending(true);

    fetch("http://localhost:9000/itenaryDetails", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking)
    }).then(() => {
      setIsPending(false);
      handleBookPackage();
      console.log('New entry added');
      // Update the entries state with the latest data
      setEntries([...entries, booking]);
    });

    navigate('/itenary');
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
    <input
            type="number"
            min="1"
            max={selectedPackage?.ticketsAvailable ||""}
            value={bookingCount}
            onChange={(e) => setBookingCount(parseInt(e.target.value, 10))}
          />
    <label>PRICE</label>
    <input value={price} placeholder= "PRICE"  onChange={(e)=>{
      setPrice(e.target.value);
    }}/>
          <button className="bg-orange-500 p-3 ml-4" disabled={isPending}>
            {isPending ? 'Adding Book...' : 'Add Book'}
          </button>
        </form>
      </div>

      {/* Displaying entered data for demonstration */}
      {/* <div>{name}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{price}</div>
      <div>{accomodations}</div> */}
    </>
  );
}

export default Ser;
