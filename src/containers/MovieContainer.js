import React, { Component } from "react";
import IsLoading from "../components/IsLoading";
import Movies from "../components/Movies";
import { getMovie } from "../services/api";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class MovieContainer extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  moviesOptions = ["now_playing", "popular", "top_rated", "upcoming"];

  componentDidMount() {
    this.fetchData(this.moviesOptions[0]);
  }

  fetchData = (event) => {
    this.setState({
      isLoading: true,
    });

    getMovie(event).then(
      (movies) => {
        this.setState({
          movies,
          isLoading: false,
        });
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="body-container">
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
          <Select
            native
            label="Category"
            inputProps={{ name: "category", id: "outlined-age-native-simple" }}
            onChange={(e) => this.fetchData(e.target.value)}
          >
            {this.moviesOptions.map((type) => (
              <option key={type} value={type}>
                {" "}
                {type}{" "}
              </option>
            ))}
          </Select>
        </FormControl>
        {isLoading ? <IsLoading /> : <Movies required={movies} />}
      </div>
    );
  }
}

export default MovieContainer;
