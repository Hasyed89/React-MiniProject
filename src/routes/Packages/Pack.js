import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stars from "./Ratings/Stars";
import './Packages.css'

const Pack = ({ packaged, tit }) => {
  const navigate = useNavigate();
  const [rate, setRate] = useState('');

  const searchRating = (e) => {
    setRate(e.target.value);
  };

  const handlePackageClick = (pkg) => {
    if (packaged && Array.isArray(packaged)) {
      navigate(`/booking/${pkg.id}`, { state: { pkg: pkg } });
    }
  };

  // Filter packages based on the entered rating
  const filteredPackages = rate === ''
    ? packaged // Show all packages if no rating is entered
    : packaged.filter(pkg => pkg.ratings.includes(parseFloat(rate)));

  return (
    <div >
      <div className="package-header">
        <h1>{tit}</h1>
      </div>
      <div className="rating-Searchbar">
        <input className="rating-Searchbar-input"
          type="text"
          value={rate}
          onChange={searchRating}
          placeholder="Search by Ratings"
        />
        <button className="rating-search-btn">Search</button>
      </div>
      
        <h2 className="avail-header">Available Packages</h2>
      
      <div>
        {filteredPackages.map((pkg) => (
          <div
            className="packgedisplay"
            key={pkg.id}
            onClick={() => handlePackageClick(pkg)}
          >
            <div>
              <h1>{pkg.destination}</h1>
            </div>
            <div>
              <img
                className="package-img"
                src={pkg.destinationimg}
                alt={pkg.destination}
              />
            </div>
            <div>
              <h2>Price: ${pkg.price}</h2>
            </div>
            <div>
              <h2>Tickets Available - [{pkg.ticketsAvailable}]</h2>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <h2 style={{ marginRight: "13px" }}>{pkg.ratings}</h2>
              <Stars stars={pkg.ratings} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pack;

