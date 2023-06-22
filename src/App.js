import { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoReducer from "./UseReducerDemo/DemoReducer";

function App() {
  return (
    <div className="App">
      <DemoReducer />
    </div>
  );
}

export default App;
