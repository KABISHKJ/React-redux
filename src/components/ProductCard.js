import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard(props) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: '300px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const imageStyle = {
    height: '150px',
    width: '180px',
    borderRadius: '9px',
  };

  return (
    <div
      className="card m-2 cursor-pointer"
      style={cardStyle}
      role="button"
      onClick={() => navigate(`/product/${props.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="mt-2">
        <img src={props.thumbnail} alt={props.title} style={imageStyle} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">Price: ${props.price}</h6>
        <h6 className="mt-2">Discount: {props.discountPercentage}%</h6>
        <h6 className="mt-2">Rating: {props.rating}</h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <button className="btn btn-success">Available</button>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
