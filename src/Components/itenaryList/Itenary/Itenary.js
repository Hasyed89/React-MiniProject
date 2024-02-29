import React, { useEffect, useState } from "react";
import ItenaryList from "../itenaryList";

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
