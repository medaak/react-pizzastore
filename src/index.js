import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
