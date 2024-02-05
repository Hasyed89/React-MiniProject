import { useState } from "react";
import { Link } from "react-router-dom";

const Pack = ({ packaged, tit }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
console.log(packaged);
  // const handlePackageClick = (packageId) => {
  //   const selected = packaged?.find((pkg) => pkg.id === packageId);
  //   setSelectedPackage(selected);

  

  return (
    <>
      <div className='package-header'>
        <h1>{tit}</h1>

        {/* Package List */}
        <div className='available-packages'>
          <h2>Available Packages</h2>
          <ul>
            {packaged?.map((pkg) => (
            <Link to ={`/booking/${pkg.id}`}> <li key={pkg.id} >
                {/* onClick={() => handlePackageClick(pkg.id)}> */}
              
                  {pkg.destination} - ${pkg.price}
                  {pkg.itinerary}
                  {pkg.accommodations}
                  {pkg.ticketsAvailable}
                  {pkg.ratings}
                
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
            }

export default Pack;
