import React from 'react';
import './Style.css'; // Import your CSS for styling

const EcommerceCard = ({ storedData }) => {

  return (
    <div className="ecommerce-card">
      <div className="card-image">
        <img src={storedData?.Images[0]} alt="Product" />
      </div>
      <div className="card-details">
        <h3 className="card-title">{storedData?.Title}</h3>
        <p className="card-description">{storedData?.Description}</p>
        <div className="card-category">
          <span className="category-label">Category:</span>
          <span className="category-value" style={{fontWeight:'bold', fontSize:20}}>{storedData?.Categories}</span>
        </div>
        <div className="card-category">
          <span className="category-label">Subcategory:</span>
          <span className="category-value">{storedData?.SubCategories}</span>
        </div>
        <p className="card-price">${storedData?.Price}</p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default EcommerceCard;
