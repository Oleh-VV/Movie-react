import React from "react";
import { useState } from "react";
import { RiFilter3Fill, RiSearchLine, RiSortAsc } from "react-icons/ri";
import Search from "./form/Search";

function Title({
  funcHandleSearch,
  textTitle,
  funcFilterMovies,
  funcSortByRating,
  funcSortByName,
  funcSortByDate,
}) {
  const [searchClass, setSearchClass] = useState("deactive");
  function changeSearchClass() {
    searchClass === "deactive"
      ? setSearchClass("active")
      : setSearchClass("deactive");
  }
  return (
    <div className="title">
      {" "}
      <h2>{textTitle}</h2>
      <div className="titleIconsWrapper">
        {" "}
        <RiSearchLine className="titleIcon" onClick={changeSearchClass} />
        <Search funcHandleSearch={funcHandleSearch} searchClass={searchClass} />
        <div className="filterWrapper">
          <RiFilter3Fill className="titleIcon filterIcon" />
          <ul>
            <li onClick={() => funcFilterMovies("popular", "Popular movies")}>
              Popular
            </li>
            <li
              onClick={() => funcFilterMovies("top_rated", "Top rated movies")}
            >
              Top rated
            </li>
            <li
              onClick={() =>
                funcFilterMovies("now_playing", "Now playing movies")
              }
            >
              Now playing
            </li>
            <li onClick={() => funcFilterMovies("upcoming", "Upcoming movies")}>
              Upcoming
            </li>
          </ul>
        </div>
        <div className="sortWrapper">
          <RiSortAsc className="titleIcon sortIcon" />
          <ul>
            <li onClick={funcSortByRating}>By rating</li>
            <li onClick={funcSortByName}>By name</li>
            <li onClick={funcSortByDate}>By date</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Title;
