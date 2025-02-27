import React from "react";
import Search from "./Search";

function Header({ search }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} />
      <button >Sort By Location</button>
    </header>
  );
}

export default Header;
