import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './Stars.css'
const Rating = () => {
  const[review, setReview] = useState(null);
  const[hover,setHover] =useState(null)
  return ( 
<>
{[...Array(5)].map((star,index)=>{
  const currentRating = index + 1;
    return(
      <label >
        <input type="radio"
        name="rating"
        value={currentRating}
        onClick={()=>
          setReview(currentRating) }/>
        <FaStar className="star"
        size={50} color={currentRating <=(hover||review)? "#ffc107":"#e4e5e9"}
        onMouseEnter={()=>setHover(currentRating)}
        onMouseLeave={()=>setHover(null)}
        />
      </label>
    )
}

)}
<p>Your Rating :{review}</p>
</>

   );
}
 
export default Rating;