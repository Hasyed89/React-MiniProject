// import React from "react";
// import{FaStar,FaStarHalfAlt} from "react-icons/fa";
// import{AiOutlineStar} from "react-icons/ai";
// import './Stars.css'

// const Stars = (stars) => {
//   console.log(stars);


//  const currentStar =  Array.from({length:5},(elem,index)=>{
//     let number = index + 0.5;
// return <span key={index}>
//   {
//     stars >= index +1 ? <FaStar/>:stars >= number ? <FaStarHalfAlt/> : <AiOutlineStar/>
//   }
// </span>
//   })
//   return (  
//  <>

//  <label value={currentStar}>

//  </label>
//     {/* <div className="icon-style"> */}
//       {currentStar}
//     {/* </div> */}
//     </>
//   );
// }
 
// export default Stars;

import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import './Stars.css';

const Stars = ({ stars }) => {
  const filledStars = Math.floor(stars); // Number of filled stars
  const hasHalfStar = stars % 1 !== 0; // Check if there's a half-filled star
  const maxStars = 5; // Maximum number of stars

  // Render filled stars
  const renderFilledStars = () => {
    let stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar className="icon"  key={i}   />);
    }
    return stars;
  };

  // Render half-filled star
  const renderHalfStar = () => {
    if (hasHalfStar) {
      return <FaStarHalfAlt key={filledStars} className="icon" />;
    }
    return null;
  };

  // Render empty stars
  const renderEmptyStars = () => {
    let stars = [];
    const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar  className="icon" key={filledStars + (hasHalfStar ? 1 : 0) + i} />);
    }
    return stars;
  };

  return (
    <div className="stars-container">
      {renderFilledStars() }
      {renderHalfStar()}
      {renderEmptyStars()}
    </div>
  );
};

export default Stars;
