import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div id="main">
      <label>Enter your name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <h1>Hello, {name}!</h1>}
    </div>
  );
};

export default App;
