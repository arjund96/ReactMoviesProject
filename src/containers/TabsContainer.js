import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import MovieContainer from "./MovieContainer";
import TvSeriesContainer from "./TvSeriesContainer";
import SearchContainer from "./SearchContainer";
// import "./TabsContainer.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`navigationBar-tabpanel-${index}`}
      aria-labelledby={`navigationBar-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `navigationBar-tab-${index}`,
    "aria-controls": `navigationBar-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    borderStyle: "solid",
    borderWidth: "1px",
    margin: "15px",
  },
  appBar: {
    backgroundColor: "#F5F5F5",
    color: "gray",
  },
}));

export default function NavigationBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          TabIndicatorProps={{ style: { background: "blue" } }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="navigationBar tabs example"
        >
          <Tab
            label="Movie"
            href="/movie"
            onClick={(event) => {
              event.preventDefault();
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="Search"
            href="/search"
            onClick={(event) => {
              event.preventDefault();
            }}
            {...a11yProps(1)}
          />
          <Tab
            label="TV"
            href="/tvseries"
            onClick={(event) => {
              event.preventDefault();
            }}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MovieContainer></MovieContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchContainer></SearchContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TvSeriesContainer></TvSeriesContainer>
      </TabPanel>
    </div>
  );
}
// reference tabs Material ui https://material-ui.com/components/tabs/
