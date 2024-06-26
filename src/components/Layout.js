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
import MovieDetails from "./MovieDetails";

const Layout = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [watchData, setWatchData] = useState(() => {
    const localData = localStorage.getItem("data");
    return JSON.parse(localData);
  });

  useEffect(() => {
    const connector = new AbortController();
    const movieData = async () => {
      if (query.length < 3) return;

      try {
        setLoader(true);
        setErrorMsg("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: connector.signal }
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

    return () => {
      connector.abort();
    };
  }, [query]);

  const onMovieClick = (id) => {
    setSelectedId(id);
  };
  const onSearch = (value) => {
    setQuery(value);
    onClose();
  };

  const onClose = () => {
    setSelectedId(null);
  };

  const addToList = (addMovie) => {
    setWatchData([...watchData, addMovie]);
  };

  const onDelete = (id) => {
    console.log(id);
    setWatchData(
      watchData.filter((item) => {
        console.log(item.imdbID);
        return item.imdbID !== id;
      })
    );
  };

  console.log(watchData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(watchData));
  }, [watchData]);

  return (
    <div className="layout_container">
      <Header movieData={movie}>
        <SearchBar query={query} onSearch={onSearch} />
      </Header>
      <Main>
        {loader && <Loader />}

        {!loader && !errorMsg && movie && (
          <MovieList movieData={movie} onMovieClick={onMovieClick} />
        )}
        {errorMsg && <ErrorMessage message={errorMsg} />}
        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            onClose={onClose}
            addToList={addToList}
            watchedMovie={watchData}
          />
        ) : (
          <WatchedList watchedMovie={watchData} onDelete={onDelete} />
        )}
      </Main>
    </div>
  );
};

export default Layout;
