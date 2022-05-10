import React, { Suspense } from "react";
import "./App.css";

import { Switch } from "wouter";
import { Route } from "wouter";

import { UserContextProvider } from "context/userContext";

import Login from "pages/Login";
import MyNav from "components/MyNav";
import Footer from "components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Movies from "pages/movies";
import Games from "pages/Games";
import Details from "pages/Details";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <MyNav />
          <div className="App-content">
            <Switch>
              <Route component={HomePage} path="/" />
              <Route component={Login} path="/login" />
              <Route component={Movies} path="/movies" />
              <Route component={Games} path="/games" />
              <Route component={Details} path="/games/:id" />
              <Route component={Details} path="/movies/:id" />
            </Switch>
          </div>
        </Suspense>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
