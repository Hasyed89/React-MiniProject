import Pack from "./Pack";
import "./Packages.css";
import useFetch from "../../Hooks/useFetch";
const Packages = () => {
  const {
    data: packagesData,
    loadMessage,
    isError,
  } = useFetch("https://my.api.mockaroo.com/users.json?key=fd6e0830");

  console.log(packagesData);

  packagesData?.packagesData?.forEach((packageData) => {
    for (const value of Object.values(sessionStorage)) {
      try {
        const booking = JSON.parse(value);
        if (booking?.bookingCount && booking.packageId === packageData.id) {
          packageData.ticketsAvailable =
            packageData.ticketsAvailable - booking.bookingCount;
//  console.log((packageData.ticketsAvailable = packageData.ticketsAvailable - booking.bookingCount) );
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="cn">
      {isError && <div>{isError}</div>}
      {loadMessage && <div>"Displaying the Travel List..."</div>}
      <div>
        {" "}
        <img
          className="package-bg"
          src="https://worldofawanderer.com/wp-content/uploads/2016/04/ross-parmly-rf6ywHVkrlY-unsplash.jpg"
        />
      </div>

      <div className="packageslist">
        {packagesData?.packagesData && (
          <Pack
            packaged={packagesData.packagesData}
            tit="Travel-Destinations"
          />
        )}{" "}
      </div>
    </div>
  );
};

export default Packages;
