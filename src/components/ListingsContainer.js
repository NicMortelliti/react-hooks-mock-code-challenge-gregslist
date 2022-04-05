import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  // Set up useState for storing listings array
  const [listingsState, setListingsState] = useState([])

  const url = "http://localhost:6001/listings"

  // Initial population of listings
  useEffect(() => {
    fetch(`${url}`)
      .then(r => r.json())
      .then(listingsData => setListingsState(listingsData))
  })

  function handleDelete(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(() => {
        const updatedListings = listingsState.filter(
          listing => listing.id !== id);
        setListingsState(updatedListings);
      })
      .catch(alert("Sorry, an error occurred when attempting to delete listing."));
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
