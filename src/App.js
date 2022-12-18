import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ListMoviePost from "./components/posts/ListMoviePosts";
import MainLayout from "./components/layout/MainLayout";
import MoviePage from "./components/pages/MoviePage";

function App() {
  const apiKey = "51bf2fbc93f11bfbc0da5c8161899d32";
  const [movieCurrentList, setMovieCurrentList] = useState(null);
  const [movieTrendingList, setMovieTrendingList] = useState(null);
  const [textTitle, setTextTitle] = useState("Trending movies");
  const [error, setError] = useState("");
  const [searching, setSearching] = useState(null);
  function getTrendingMovies() {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
      .then((response) => {
        setMovieTrendingList([...response.data.results]);
        setMovieCurrentList([...response.data.results]);
      })
      .catch((error) => setError(error.message));
  }
  function getFilterMovies(query, title) {
    https: axios
      .get(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}`)
      .then((response) => {
        setMovieCurrentList([...response.data.results]);
        setTextTitle(title);
        //console.log(response.data.results);
      })
      .catch((error) => setError(error.message));
  }
  function sortByRating() {
    const sortList = [...movieCurrentList];
    sortList.sort((a, b) => b.vote_average - a.vote_average);
    setMovieCurrentList(sortList);
  }
  function sortByName() {
    const sortList = [...movieCurrentList];
    sortList.sort(
      (a, b) => a.title.localeCompare(b.title) - b.title.localeCompare(a.title)
    );
    setMovieCurrentList(sortList);
  }
  function sortByDate() {
    const sortList = [...movieCurrentList];
    sortList.sort(
      (a, b) => new Date(a.release_date) - new Date(b.release_date)
    );
    setMovieCurrentList(sortList);
  }
  function getHomepage() {
    setMovieCurrentList(movieTrendingList);
    setTextTitle("Trending movies");
  }
  function getSearchQueryMovieList(query) {
    setSearching("Searching...");
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      )
      .then((response) => {
        setMovieCurrentList([...response.data.results]);
        setTextTitle(`Results for "${query}"`);
        setSearching(null);
      })
      .catch((error) => setError(error.message));
  }
  useEffect(() => getTrendingMovies(), []);
  //if (movieCurrentList !== null) {movieCurrentList.forEach((element) => {console.log(element.genre_ids);}); }
  // useEffect(() => getFilterMovies(upcoming), []);
  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <Routes>
          <Route path="/" element={<MainLayout homeFunction={getHomepage} />}>
            <Route path="/:slug" element={<MoviePage />} />
            <Route
              path="/"
              element={
                error ? (
                  <h1 className="errorMessage">{error}</h1>
                ) : (
                  <ListMoviePost
                    list={movieCurrentList}
                    funcHandleSearch={getSearchQueryMovieList}
                    funcFilterMovies={getFilterMovies}
                    textTitle={textTitle}
                    searching={searching}
                    funcSortByRating={sortByRating}
                    funcSortByName={sortByName}
                    funcSortByDate={sortByDate}
                  />
                )
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
