import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Button, AppBar, Toolbar, TextField } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar style={{ background: "green" }} position="staic">
          <Toolbar>This is the header</Toolbar>
        </AppBar>
        <Login />
      </div>
    );
  }
}

export default App;
