import React, { useState } from "react";
import HookMqtt from "./components/Hook/";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HookMqtt />
      {/* Hook or Class */}
      {/* <ClassMqtt /> */}
    </div>
  );
}

export default App;
