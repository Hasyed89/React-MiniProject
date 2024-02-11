
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Components/useFetch";
import Services from "../Services/Services";

const Pack = ({ packaged, tit }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();
const {id} =useParams()
  const packagesDataUrl = `http://localhost:8000/packagesData/${id}`;
  const { data: packagesData, loadMessage, isError } = useFetch(packagesDataUrl);

  useEffect(() => {
    if (packagesData) {
      // Set packagesData to state when it's available
      setSelectedPackage(null); // Reset selected package when packages data changes
    }
  }, [packagesData]);

  const handlePackageClick = (packageId) => {
    if (packaged && Array.isArray(packaged)) {
      const selected = packaged.find((pkg) => pkg.id === packageId);
      setSelectedPackage(selected);
      navigate(`/booking/${packageId}`);
    }
  };

  return (
    <>
      <div className="package-header">
        <h1>{tit}</h1>
        <div className="available-packages">
          <h2>Available Packages</h2>
          <ul>
            {packaged?.map((pkg) => (
              <li key={pkg.id} onClick={() => handlePackageClick(pkg.id)}>
                {pkg.destination} - ${pkg.price} -{pkg.ticketsAvailable}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isError && <div>{isError}</div>}
      {loadMessage && <div className="cn">"Displaying the Travel List..."</div>}
      <Services selectedPackageProp={selectedPackage} handlePackageClick={handlePackageClick({id})} />

    </>
  );
};

export default Pack;
