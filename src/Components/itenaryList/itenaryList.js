import React, { useState } from "react";
import "./itenaryList.css";
import Footer from "../Footer/Footer";
const ItenaryList = ({ entries }) => {
  const [searchBar, setSearchBar] = useState("");

  const searchItenary = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
    console.log(searchBar);
  };

  return (
    <>
      <div className="Itenary-entry">
        <h1>Itenary Entries</h1>
        <div className="search-bar">
          <form action="submit">
            <input
              id="search-bar-input"
              type="text"
              onChange={searchItenary}
              placeholder="Search your Booking"
              name={searchBar}
            />
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Ticket Booked</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {entries
              .filter((entry) =>
                entry.name?.toLowerCase().includes(searchBar || "")
              )
              .map((entry) => (
                <tr key={entry.id}>
                  <td> {entry.name} </td>
                  <td> {entry.phone} </td>
                  <td> {entry.email} </td>
                  <td> {entry.bookingCount} </td>
                  <td> {entry.destination} </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ItenaryList;
