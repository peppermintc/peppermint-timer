import React from "react";
import "./app.css";
import Header from "./components/header/header";
import TimerContainer from "./components/TimerContainer/timer_container";

function App() {
  return (
    <div className="App">
      <Header />
      <TimerContainer />
    </div>
  );
}

export default App;
