import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/api";
import "./common.css";

const MovieDetails = ({ selectedId }) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const details = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setDetails(data);
    };

    details();
  }, [selectedId]);

  console.log(details);
  return (
    <div style={{ color: "white" }}>
      <div>
        <div>
          <img />
        </div>
        <div>
          <h3>Title</h3>
          <div>
            <span>Year</span>
            <span>time</span>
          </div>
          <div>
            <span>type of movie</span>
          </div>
          <div>Imdb Rating</div>
        </div>
        <p>
          MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
