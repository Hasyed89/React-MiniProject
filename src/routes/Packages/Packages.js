import Pack from "./Pack";
import useFetch from "../../Components/useFetch";
import './Packages.css'

const Packages = () => {
  const { data: packagesData, loadMessage, isError} = useFetch("http://localhost:8000/packagesData");

  return (
    <>
      {isError && <div>{isError}</div>}
      {loadMessage && <div className="cn">"Displaying the Travel List..."</div>}
      {packagesData && <Pack packaged={packagesData} tit="Travel-package"   />}
    </>
  );
};

export default Packages;