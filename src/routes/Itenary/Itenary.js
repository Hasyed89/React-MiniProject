// // Itenary.js
// import React from 'react';
// import useFetch from "../../Components/useFetch";
// import Service from "../Services/Services";
// import ItenaryList from '../../Components/itenaryList/itenaryList';
// import Booking from '../Booking/Booking';

// const Itenary = () => {
//   const { data: packagesData, loadMessage, isError } = useFetch("http://localhost:8000/packagesData");
//   const [entries, setEntries] = React.useState([]);

//   const SubmitHandler = (booking, setIsPending, navigate) => {
//     setIsPending(true);
//     // Make the API call to add the entry to the server
//     fetch("http://localhost:9000/itenaryDetails", {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(booking)
//     }).then(() => {
//       setIsPending(false);
//       console.log('New entry added');
//       // Update the entries state with the latest data
//       setEntries([...entries, booking]);
//     });
//     // Navigate to the desired location (e.g., '/itenary')
//     navigate('/itenaryList');
//   }
//   return (
//     <>
//       {isError && <div>{isError}</div>}
//       {loadMessage && <div className="cn">"Booking Confirmation..."</div>}
//       {packagesData && <Service packaged={packagesData} SubmitHandler={SubmitHandler} />}

//       <ItenaryList entries={entries} />
//     </>
//   );
// };

// export default Itenary;

import React, { useEffect, useState } from "react";
import ItenaryList from "../../Components/itenaryList/itenaryList";

const Itenary = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    const initialEntries = [];
    for (const value of Object.values(sessionStorage)) {
      try {
        const booking = JSON.parse(value);
        if (booking?.bookingCount) initialEntries.push(booking);
      } catch (error) {
        console.log(error);
      }
    }
    setEntries(initialEntries);
  };

  return <>{entries && <ItenaryList entries={entries} />}</>;
};

export default Itenary;
