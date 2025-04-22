import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input 
            className="flex"
            type="ratio" 
            name="rating" 
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
             />
            <FaStar 
            className="star"
            color= {ratingValue <= (hover || rating) ? "ffc107" : "e4e5e9"}
            size={100} 
            onMouseOver={() => setHover(ratingValue)}
            onMouseOut={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
