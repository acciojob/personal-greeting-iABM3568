import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div id="main">
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}

export default App;
