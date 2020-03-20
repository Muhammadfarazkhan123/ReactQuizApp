import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBarScreen from "./component/AppBar";
import MainScreen from "./screens/mainScreen";
import Question from "./screens/questions";
import Result from "./screens/Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <AppBarScreen />
        <div
          className="App"
          style={{
            width: "70%",
            //   height: "100%",
            marginLeft: "15%",
            border: "2px solid #b4b4b4",
            marginTop: "1%",
            borderRadius: 5,
            boxShadow: "3px 5px 5px #cfcbcc",
            paddingBottom: 20,
            marginBottom: "1%"
          }}
        >
          <Switch>
            <Route path="/" exact component={MainScreen} />
            <Route path="/Quiz" component={Question} />
            <Route path="/Result" component={Result} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
