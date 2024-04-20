import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/api";

import Rating from "react-rating-app";
import "./common.css";
import Loader from "./Loader";

const MovieDetails = ({ selectedId, onClose }) => {
  const [details, setDetails] = useState({});
  const [loader, setLoader] = useState(false);
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

  const handleId = () => {
    onClose();
  };

  console.log(details);
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
          <div>
            <Rating size={24} maxRating={10} />
          </div>
          <p>{details.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
