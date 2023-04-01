import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ listings, handleDelete, termToSearch }) {
  const listingsToShow = listings.filter(listing => {
    return listing.description.toLowerCase().includes(termToSearch.toLowerCase())
  }).map(listing => {
    return <ListingCard handleDelete={handleDelete} key={listing.id} listing={listing} />
  })



  return (
    <main>
      <ul className="cards">
        {listingsToShow}
      </ul>
    </main>
  );
}

export default ListingsContainer;
