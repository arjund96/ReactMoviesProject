import React from "react";
import InputLabel from "@material-ui/core/InputLabel";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./FormSearch.css";

function FormSearch(props) {
  return (
    <form onSubmit={props.onSubmit} className="search-options">
      <TextField
        label="Search"
        name="searchName"
        className="input-field"
        onChange={(e) => props.onInputChange(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <FormControl variant="outlined" className="search-selection">
        <InputLabel id="demo-simple-select-outlined-label">
          Search Type
        </InputLabel>
        <Select
          className="select"
          onChange={(e) => props.onSelectChange(e.target.value)}
          labelId="demo-simple-select-outlined-label"
          // variant="outlined"
        >
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="multi">Multi</MenuItem>
          <MenuItem value="tv">TV</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" className="button" type="submit">
        Search
      </Button>
    </form>
  );
}

export default FormSearch;
