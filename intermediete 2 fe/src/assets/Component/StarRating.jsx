import React, { useState } from 'react';
import { FaStar} from 'react-icons/fa';


const StarRating = () => {
  
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRating = (rating) => {
    setRating(rating);
  };

  const handleHover = (rating) => {
    setHover(rating);
  };

  const handleMouseOut = () => {
    setHover(0);
  };

  return (
  
    <div className="flex">
      {["bad", "enough", "good", "i like", "really good"].map((star, index) => (
        <span
          key={index}
          onMouseOver={() => handleHover(star)}
          onMouseOut={handleMouseOut}
          onClick={() => handleRating(star)}
          style={{
            fontSize: 24,
            cursor: 'pointer',
            color: hover >= star || rating >= star ? 'orange' : 'gray',
          }}
        >
            <label>
                    <FaStar size={30} className="cursor-pointer" />
                    </label>
          
        </span>
      ))}
      <h1 className="pl-12 font-medium text-base">Ulasan Kami: {rating}</h1>
    </div>
  );
};

export default StarRating;