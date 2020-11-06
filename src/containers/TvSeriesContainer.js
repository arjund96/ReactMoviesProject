import React, { Component } from "react";
import IsLoading from "../components/IsLoading";
import { getTvSeries } from "../services/api";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TvSeries from "../components/TvSeries";

class TvSeriesContainer extends Component {
  state = {
    tvSeries: [],
    isLoading: false,
  };

  tvSeriesOptions = ["airing_today", "on_the_air", "popular", "top_rated"];

  componentDidMount() {
    this.fetchTvSeries(this.tvSeriesOptions[0]);
  }

  fetchTvSeries = (e) => {
    this.setState({
      isLoading: true,
    });

    getTvSeries(e).then(
      (tvSeries) => {
        this.setState({
          tvSeries,
          isLoading: false,
        });
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };

  render() {
    const { isLoading, tvSeries } = this.state;
    return (
      <div className="body-container">
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
          <Select
            native
            label="Category"
            inputProps={{ name: "category", id: "outlined-age-native-simple" }}
            onChange={(e) => this.fetchTvSeries(e.target.value)}
          >
            {this.tvSeriesOptions.map((type) => (
              <option key={type} value={type}>
                {" "}
                {type}{" "}
              </option>
            ))}
          </Select>
        </FormControl>
        {isLoading ? <IsLoading /> : <TvSeries required={tvSeries} />}
      </div>
    );
  }
}

export default TvSeriesContainer;
