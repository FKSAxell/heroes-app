import React from "react";
import { Redirect } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import { BrowserRouter as Switch, Route } from "react-router-dom";
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/dc" component={DcScreen} />
        <Route exact path="/heroe/:heroeId" component={HeroScreen} />
        <Redirect to="/marvel" />
      </Switch>
    </>
  );
};
