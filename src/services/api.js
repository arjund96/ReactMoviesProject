import axios from "axios";

import { APP_KEY, BASE_URL } from "../config/api_config";

export const getMovie = async (type) => {
  const url = `${BASE_URL}movie/${type}?api_key=${APP_KEY}`;
  try {
    const result = await axios.get(url);
    const json = result.data.results;
    return json;
  } catch (error) {
    throw error;
  }
};

export const getTvSeries = async (type) => {
  const url = `${BASE_URL}tv/${type}?api_key=${APP_KEY}`;
  try {
    const result = await axios.get(url);
    const json = result.data.results;
    return json;
  } catch (error) {
    throw error;
  }
};

export const getSearch = async (userSearch, type) => {
  const url = `${BASE_URL}search/${type}?api_key=${APP_KEY}&query=${userSearch}`;
  try {
    const result = await axios.get(url);
    const json = result.data.results;
    // console.log(json)
    return json;
  } catch (err) {
    throw err;
  }
};
