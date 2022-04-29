import React from 'react';
import './App.css';
import { Switch } from 'wouter';
import { Route } from 'wouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={HomePage} path="/"/>
      </Switch>
    </div>
  );
}

export default App;
