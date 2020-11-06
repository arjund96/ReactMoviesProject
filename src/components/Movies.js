import React from "react";

import Grid from "@material-ui/core/Grid";
import MainCard from "./MainCard";

const Movies = (props) => {
  const baseImagePath = "http://image.tmdb.org/t/p/w500/";

  return (
    <div className="container">
      <Grid>
        {props.required.map((movie) => {
          let {
            id,
            title,
            release_date,
            overview,
            popularity,
            poster_path,
          } = movie;

          return (
            <Grid>
              <MainCard
                key={id}
                id={id}
                title={title}
                imageUrl={baseImagePath + poster_path}
                release_date={release_date}
                overview={overview}
                popularity={popularity}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Movies;
