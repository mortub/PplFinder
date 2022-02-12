import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useLocation } from 'react-router-dom'

const routes = ["/", "/favorites"]

const NavBar = () => {
  const currentTab = () => {
    const { pathname } = useLocation();
    return routes.indexOf(pathname);
  };

  const [value, setValue] = useState(currentTab);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} component={Link} to={routes[0]} />
        <Tab label="Favorites" index={1} component={Link} to={routes[1]} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
