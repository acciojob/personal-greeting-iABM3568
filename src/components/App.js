import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const isValidName = name.trim().length > 0;

  return (
    <div id="main">
      <label>Enter your name:</label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {isValidName && (
        <h1>Hello, {name.trim()}!</h1>
      )}
    </div>
  );
};

export default App;
