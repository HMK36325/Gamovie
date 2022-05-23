import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";

import { Switch } from "wouter";
import { Route } from "wouter";

import { UserContextProvider } from "context/userContext";

import MyNav from "components/MyNav";
import Footer from "components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Movies from "pages/movies";
import Games from "pages/Games";
import Details from "pages/Details";
import Search from "pages/Search";
import Votes from "pages/Votes";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";
import Admin from "pages/Admin";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <MyNav />
          <div className="App-content">
            <RecoilRoot>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route component={LoginPage} path="/login" />
                <Route component={RegisterPage} path="/register" />
                <Route component={Admin} path="/admin" />
                <Route component={Movies} path="/movies" />
                <Route component={Games} path="/games" />
                <Route component={Details} path="/games/:id" />
                <Route component={Details} path="/movies/:id" />
                <Route component={Details} path="/search/games/:id" />
                <Route component={Details} path="/search/movies/:id" />
                <Route component={Search} path="/search/:keyword" />
                <Route component={Votes} path="/votes" />
              </Switch>
            </RecoilRoot>
          </div>
        </Suspense>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
