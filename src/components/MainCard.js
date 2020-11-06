import React from "react";

import "./MainCard.css";

const MainCard = (props) => {
  const { imageUrl, title, overview, release_date, popularity } = props;

  return (
    <div className="card-container">
      <img src={imageUrl} alt="cover image" />
      <div>
        <h2>{title}</h2>
        <p>
          {" "}
          Release Date: {release_date} | Popularity: {popularity}
        </p>
        <p> Overview: {overview} </p>
      </div>
    </div>
  );
};

export default MainCard;
