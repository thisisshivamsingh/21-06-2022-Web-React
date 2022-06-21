import React from "react";
import User from "./User";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <User data={{ name: "shivam singh", age: 24 }} />
    </div>
  );
}

export default App;
