import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/app.scss";

//Compnents
import Header from "./components/header";

//Pages
import Home from "./pages/home";

//Routes
const routes = [{ path: "/", name: "Home", Component: Home }];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </Router>
  );
}

export default App;
