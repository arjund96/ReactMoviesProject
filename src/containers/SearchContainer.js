import React, { Component } from "react";
import MainCard from "../components/MainCard";
import { getSearch } from "../services/api";
import FormSearch from "../components/FormSearch";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userSearch: null,
    isLoaded: true,
    type: "",
    results: [],
  };

  fetchData = (event) => {
    const { userSearch, type } = this.state;
    event.preventDefault();
    getSearch(userSearch, type).then(
      (res) => {
        this.setState({
          results: res,
          isLoaded: false,
        });
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };

  handleInputChange = (userSearch) => {
    this.setState({
      userSearch: userSearch,
      isLoaded: true,
    });
  };
  handleSelectChange = (type) => {
    this.setState({
      type: type,
    });
  };

  render() {
    const { results, isLoaded } = this.state;

    if (isLoaded === true) {
      return (
        <main className="results-main">
          <FormSearch
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchData}
            onSelectChange={this.handleSelectChange}
          />
          <div id="result-change" className="results-text">
            Please Enter a Search
          </div>
        </main>
      );
    } else if (isLoaded === false) {
      const baseImagePath = "https://image.tmdb.org/t/p/w500";
      return (
        <main className="results-main">
          <FormSearch
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchData}
            onSelectChange={this.handleSelectChange}
          />
          <div className="result-cards">
            {results.map((item) => 
              (
              <MainCard
                key={item.id}
                title={item.title}
                date={item.release_date}
                popularity={item.popularity}
                overview={item.overview}
                imageUrl={baseImagePath + `${item.poster_path}`}
                id={item.id}
              />
            ))}
          </div>
        </main>
      );
    }
  }
}

export default SearchContainer;
