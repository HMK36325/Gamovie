import React, { Suspense } from "react";
import "./App.css";

import { Switch } from "wouter";
import { Route } from "wouter";

import { UserContextProvider } from "context/userContext";

import Login from "pages/Login";
import MyNav from "components/MyNav";
import Footer from "components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
            </Switch>
          </div>
        </Suspense>
        <Footer></Footer>
      </div>
    </UserContextProvider>
  );
}

export default App;
