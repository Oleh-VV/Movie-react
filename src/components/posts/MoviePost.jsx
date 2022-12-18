import React from "react";
import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import genres from "../../data/genres";
import classes from "./moviePost.module.css";

function MoviePost({ props }) {
  const movie = { ...props };
  const genreID = movie.genre_ids[0];
  //console.log(movie.poster_path);
  return (
    <Link to={`${movie.id}`} className={classes.post}>
      <div className={classes.title}>
        {" "}
        <h3>{movie.title}</h3>
      </div>
      <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie poster"
          />
        ) : (
          <h2 className={classes.noPoster}>No poster</h2>
        )}
      </div>
      <h4>{genreID && genres.find((f) => f.id === genreID).name}</h4>
      <div className={classes.postBottom}>
        <div className={classes.rating}>
          <RiStarSFill className={classes.ratingIcon} />
          <div className={classes.ratingPoints}>
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
        <div className={classes.date}>{movie.release_date}</div>
      </div>
    </Link>
  );
}

export default MoviePost;
