import React from "react";

const MovieDetails = ({ selectedId }) => {
  console.log(selectedId);
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
