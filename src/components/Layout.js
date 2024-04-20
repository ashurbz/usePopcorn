import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import "./common.css";
import MovieList from "./MovieList";
import WatchedList from "./WatchedList";
import SearchBar from "./SearchBar";
import { API_KEY } from "../utils/api";
import Loader from "./Loader";
import Error from "./ErrorMessage";
import ErrorMessage from "./ErrorMessage";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const Layout = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const movieData = async () => {
      try {
        setLoader(true);
        setErrorMsg("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        if (data.response === "False") {
          throw new Error("Movie Not found");
        }
        setMovie(data.Search);
      } catch (err) {
        console.log(err.message);
        setErrorMsg(err.message);
      } finally {
        setLoader(false);
        setErrorMsg("");
      }
    };

    movieData();
  }, [query]);

  const onSearch = (value) => {
    setQuery(value);
  };

  console.log(movie);

  return (
    <div className="layout_container">
      <Header movieData={movie}>
        <SearchBar query={query} onSearch={onSearch} />
      </Header>
      <Main>
        {loader && <Loader />}

        {!loader && !errorMsg && <MovieList movieData={movie} />}
        {errorMsg && <ErrorMessage message={errorMsg} />}
        <WatchedList watchedMovie={tempWatchedData} />
      </Main>
    </div>
  );
};

export default Layout;
