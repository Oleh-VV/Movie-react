import React from "react";
import classes from "./listMoviePost.module.css";
import MoviePost from "./MoviePost";
import Title from "../Title";

function ListMoviePost({
  list,
  funcHandleSearch,
  funcFilterMovies,
  funcSortByRating,
  funcSortByName,
  funcSortByDate,
  textTitle,
  searching,
}) {
  if (searching) {
    return <h1 className="searchingMessage">{searching}</h1>;
  }
  if (list !== null) {
    if (list.length === 0) {
      return <h1 className="errorMessage">Movie not found</h1>;
    }
  }
  return list !== null ? (
    <div>
      <Title
        funcHandleSearch={funcHandleSearch}
        textTitle={textTitle}
        funcFilterMovies={funcFilterMovies}
        funcSortByRating={funcSortByRating}
        funcSortByName={funcSortByName}
        funcSortByDate={funcSortByDate}
      />
      <div className={classes.postList}>
        {list.map((movie) => (
          <MoviePost props={movie} key={movie.id} />
        ))}
      </div>{" "}
    </div>
  ) : (
    <h1 className={classes.loading}>Loading...</h1>
  );
}

export default ListMoviePost;
