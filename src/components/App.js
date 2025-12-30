import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div id="main">
      <label>Enter your name:</label>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.trim() !== "" && (
        <p>Hello {name.trim()}!</p>
      )}
    </div>
  );
};

export default App;
