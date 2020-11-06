import React from "react";

import Grid from "@material-ui/core/Grid";
import MainCard from "./MainCard";

const TvSeries = (props) => {
  const baseImagePath = "http://image.tmdb.org/t/p/w500/";

  return (
    <div className="container">
      <Grid>
        {props.required.map((tvShow) => {
          let {
            id,
            name,
            first_air_date,
            overview,
            popularity,
            poster_path,
          } = tvShow;
          return (
            <Grid>
              <MainCard
                key={id}
                id={id}
                title={name}
                imageUrl={baseImagePath + poster_path}
                release_date={first_air_date}
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

export default TvSeries;
