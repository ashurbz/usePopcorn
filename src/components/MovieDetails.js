import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/api";

import Rating from "react-rating-app";
import "./common.css";
import Loader from "./Loader";

const MovieDetails = ({ selectedId, onClose, addToList, watchedMovie }) => {
  const [details, setDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const [starRating, setStarRating] = useState("");

  const isWatched = watchedMovie
    .map((movie) => {
      return movie.imdbID;
    })
    .includes(selectedId);

  const showUserRating = watchedMovie.find((movie) => {
    return movie.imdbID === selectedId;
  })?.userRating;

  console.log(isWatched);
  useEffect(() => {
    const details = async () => {
      setLoader(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setDetails(data);
      setLoader(false);
    };

    details();
  }, [selectedId]);

  useEffect(() => {
    if (!details.Title) return;
    document.title = details.Title;

    return () => {
      document.title = "usePorpcorn";
    };
  }, [details.Title]);

  const handleId = () => {
    onClose();
  };
  console.log(details);
  const handleAddMovie = () => {
    addToList({
      imdbID: details.imdbID,
      Title: details.Title,
      Poster: details.Poster,
      Runtime: details.Runtime,
      imdbRating: Number(details.imdbRating),
      userRating: Number(starRating),
    });
    onClose();
  };
  return (
    <div style={{ color: "white", padding: "20px" }}>
      {loader && <Loader />}
      {!loader && (
        <div>
          <div onClick={handleId} style={{ cursor: "pointer", width: "50px" }}>
            🔙🔙🔙🔙🔙🔙
          </div>
          <div>
            <img src={details.Poster} alt="movie poster" />
          </div>
          <div>
            <h3>{details.Title}</h3>
            <div>
              <span style={{ padding: "10px" }}>{details.Year}</span>
              <span>{details.Runtime}</span>
            </div>
            <div>
              <span>{details.Genre}</span>
            </div>
            <div>{details.imdbRating} Imdb Rating</div>
          </div>
          {isWatched && <>You have rated this movie as {showUserRating}</>}
          {!isWatched && (
            <>
              <div>
                <Rating size={24} maxRating={10} onSetRating={setStarRating} />
              </div>
              <div>
                {starRating > 0 ? (
                  <button
                    style={{
                      padding: "10px",
                      margin: "20px",
                      width: "80%",
                      fontSize: "x-large",
                      cursor: "pointer",
                      border: "2px solid red",
                      borderRadius: "10px",
                    }}
                    onClick={handleAddMovie}
                  >
                    Add to Wishlist ❤️
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}

          <p>{details.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
