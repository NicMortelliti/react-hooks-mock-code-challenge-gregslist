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


  return (
    <main>
      <ul className="cards">
        {listingsState.map(listing => {
          return < ListingCard listingProps={listing}/>})}
      </ul>
    </main>
  );
}

export default ListingsContainer;
