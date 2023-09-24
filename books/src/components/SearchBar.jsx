// SearchBar.jsx
import "../components/Search.css"
import React, { useContext } from "react";
import { BioDataContext } from "./ContextPart";

const SearchBar = () => {
  const { query, SearchPost } = useContext(BioDataContext);

  return (
    <body className="search" style={{marginTop:"80px"}}>
    <div className="box">
      <input
        type="search"
        placeholder="Search Books"
        value={query}
        onChange={(e) => SearchPost(e.target.value)}
      />
      <a href="/"><i className="bi bi-search text-danger fs-5"></i></a>
    </div>
    </body>
  );
};

export default SearchBar;
