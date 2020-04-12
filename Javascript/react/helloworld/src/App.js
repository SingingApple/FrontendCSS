import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Count from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import Click from "./components/click";
import EventBinder from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
      <Count></Count>
      <ParentComponent></ParentComponent>
      {/* <Greet name="Anurag">
        <p>This is children</p>
        <button>okay</button>
      </Greet>
      <Greet name="Mario">
        <p>This is another</p>
      </Greet>
      <Greet name="Luigi" />

      <Welcome name="bruce" heroName="batman"></Welcome>
      <Welcome name="peter" heroName="spiderman"></Welcome>
      <Welcome name="diana" heroName="wonderWoman"></Welcome> */}
      <Greet name="Diana" heroName="Wonder Woman"></Greet>
      <Welcome name="bruce" heroName="batman"></Welcome>
      <FunctionClick></FunctionClick>
      <Click></Click>
      <EventBinder></EventBinder>
    </div>
  );
}

export default App;
