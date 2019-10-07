import React from "react";
import { Switch, Route,  } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPAge = () => (
  <div>
    <h1>Hats PAge</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path='/hats' component={HatsPAge} />
      </Switch>
    </div>
  );
}

export default App;
