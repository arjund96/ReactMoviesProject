import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieContainer from "./containers/MovieContainer";
import SearchContainer from "./containers/SearchContainer";
import TvSeriesContainer from "./containers/TvSeriesContainer";

import TabsContainer from "./containers/TabsContainer";

const App = () => (
  <div className="App">
    {/* place header */}
    <h1>React Movies App</h1>
    <TabsContainer />
    <BrowserRouter>
      <Switch>
        <Route path="/movie" component={MovieContainer} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/tvseries" component={TvSeriesContainer} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
