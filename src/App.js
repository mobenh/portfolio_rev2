import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className="name">Moben Haq</h1>

      {/* Vertical line (svg1) */}
      <svg className="svg1-vertical-line">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" />
      </svg>




      {/* Horizontal line (svg2) */}
      <svg className="svg2-horizontal-line">
        <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="black" />
      </svg>

      {/* Left vertical line (svg3) */}
      <svg className="svg3-left-vertical-line">
        <line x1="20%" y1="0" x2="20%" y2="50%" stroke="black" />
      </svg>

      <div className="milestone1">
        Skills
      </div>

      <div className="milestone2">
        Projects
      </div>
    </div>
  );
}

export default App;
