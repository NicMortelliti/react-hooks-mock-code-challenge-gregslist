import React, { useState } from "react";

function ListingCard({listingProps:{description, image, location}, onDelete}) {
  const [favoriteState, setFavoriteState] = useState(false)
  
  function handleFavoriteClick(event) {
    if (event.target.classList.contains("active")) {
      setFavoriteState(false)
    } else {
      setFavoriteState(true)
    }
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteState ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
