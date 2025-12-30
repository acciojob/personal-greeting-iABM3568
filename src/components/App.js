import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const trimmedName = name.trim();

  return (
    <div id="main">
      <label htmlFor="name-input">Enter your name:</label>

      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {trimmedName && (
        <h1 id="greeting">Hello, {trimmedName}!</h1>
      )}
    </div>
  );
};

export default App;
