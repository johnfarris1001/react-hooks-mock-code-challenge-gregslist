import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [termToSearch, setTermToSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  function handleDelete(listing) {
    setListings(listings.filter(item => {
      return item !== listing
    }))
  }

  function search(searchTerm) {
    setTermToSearch(searchTerm)
  }

  return (
    <div className="app">
      <Header search={search} />
      <ListingsContainer termToSearch={termToSearch} handleDelete={handleDelete} listings={listings} />
    </div>
  );
}

export default App;
