import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  // Set up useState for storing listings array
  const [listingsState, setListingsState] = useState([])

  // Initial population of listings
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listingsData => setListingsState(listingsData))
  })

  function handleDelete(ID) {
    console.log(ID)
  }

  return (
    <main>
      <ul className="cards">
        {listingsState.map(listing => {
          return < ListingCard key={listing.id} listingProps={listing} onDeleteClick={()=>handleDelete(listing.id)}/>})}
      </ul>
    </main>
  );
}

export default ListingsContainer;
