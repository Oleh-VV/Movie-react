import React from "react";
import { Link } from "react-router-dom";
import { RiStarSFill, RiHome2Line } from "react-icons/ri";
import "../App.css";
function Header({ homeFunction }) {
  return (
    <div className="header">
      <Link to={"/"} className="homeLink">
        <RiHome2Line className="homeIcon" onClick={homeFunction} />
      </Link>
      <div>
        {" "}
        <RiStarSFill className="titleStar1" />{" "}
        <RiStarSFill className="titleStar2" />{" "}
        <RiStarSFill className="titleStar3" />
        <RiStarSFill className="titleStar4" />{" "}
        <RiStarSFill className="titleStar5" />
      </div>

      <h1>Find your movie</h1>
      <div>
        {" "}
        <RiStarSFill className="titleStar5" />{" "}
        <RiStarSFill className="titleStar4" />{" "}
        <RiStarSFill className="titleStar3" />
        <RiStarSFill className="titleStar2" />{" "}
        <RiStarSFill className="titleStar1" />
      </div>
    </div>
  );
}

export default Header;
