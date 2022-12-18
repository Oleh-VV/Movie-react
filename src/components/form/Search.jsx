import React from "react";

import { useState } from "react";
import classes from "./search.module.css";

function Search({ funcHandleSearch, searchClass }) {
  const [query, setQuery] = useState("");
  function inputHandler(e) {
    setQuery(e.target.value);
  }
  function formHandler(e) {
    e.preventDefault();
    funcHandleSearch(query);
  }
  return (
    <form
      onSubmit={formHandler}
      className={
        searchClass === "deactive" ? classes.formDeactive : classes.formActive
      }
    >
      {" "}
      <input
        type="search"
        onChange={inputHandler}
        value={query}
        className={classes.search}
        placeholder="Search..."
      />
    </form>
  );
}

export default Search;
