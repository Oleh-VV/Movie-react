import { useState, useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";
import axios from "axios";
import { useParams } from "react-router-dom";
import genresList from "../../data/genres";
import classes from "./moviePage.module.css";
import NotFound from "./NotFound";

function MoviePage() {
  const [movie, setMovie] = useState(null);
  const [errorMovie, setErrorMovie] = useState(null);
  const [genres, setGenres] = useState(null);
  const [companies, setCompanies] = useState(null);
  const apiKey = "51bf2fbc93f11bfbc0da5c8161899d32";
  const params = useParams();
  function getMovie(id) {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
        setGenres(response.data.genres);
        setCompanies(response.data.production_companies);
      })
      .catch((err) => setErrorMovie("error"));
  }
  useEffect(() => getMovie(params.slug), [params.slug]);

  if (errorMovie !== null) {
    return <NotFound />;
  }
  return movie !== null ? (
    <div className={classes.moviePage}>
      {" "}
      <div className={classes.poster}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie poster"
          />
        ) : (
          <h2 className={classes.noPoster}>No poster</h2>
        )}{" "}
      </div>{" "}
      <div className={classes.contentWrapper}>
        <div className={classes.title}>
          {" "}
          <h1>{movie.title}</h1>{" "}
        </div>
        <div className={classes.rating_releaseDate}>
          <div className={classes.rating}>
            {" "}
            <RiStarSFill className={classes.ratingIcon} />
            <div className={classes.ratingPoints}>
              {" "}
              {movie.vote_average.toFixed(1)}{" "}
            </div>
          </div>{" "}
          <div className={classes.releaseDate}>
            <span className={classes.release}>release: </span>
            <span className={classes.date}>{movie.release_date}</span>
          </div>{" "}
        </div>
        <div className={classes.genres}>
          {genres.map((genre) => (
            <h5 key={genre.id}>
              {genresList.find((f) => f.id === genre.id).name}
            </h5>
          ))}
        </div>
        <p className={classes.about}>{movie.overview}</p>{" "}
        <h3>{movie.tagline}</h3>{" "}
        <div className={classes.companiesWrapper}>
          {companies.map((company) => {
            if (company.logo_path) {
              return (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                  alt="Logo Company"
                  key={company.id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default MoviePage;
