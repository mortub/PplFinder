import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { Favorites } from "pages";
import { ThemeProvider } from "theme";
import { FavoriteUsersProvider } from "contexts";
import NavBar from "components/NavBar";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <FavoriteUsersProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
      </FavoriteUsersProvider>
    </ThemeProvider>
  );
};

export default AppRouter;
