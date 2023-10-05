import React from 'react';
import './App.css';

function RoadmapLine({ milestones }) {
  return (
    <svg className="roadmap-line" viewBox={`0 0 100 ${(milestones.length + 2) * 100}`}>
      <line x1="50" y1="0" x2="50" y2="100" stroke="rgb(43,120,228)" strokeWidth=".5" />

      {milestones.map((_, index) => (
        <line x1="50" y1={(index + 1) * 100} x2="50" y2={(index + 2) * 100} stroke="rgb(43,120,228)" strokeWidth=".5" />
      ))}

      <line x1="50" y1={(milestones.length + 1) * 100} x2="50" y2={(milestones.length + 2) * 100} stroke="rgb(43,120,228)" strokeWidth=".5" />
    </svg>
  );
}

function Milestone({ title }) {
  return (
    <div className="milestone">
      <p>{title}</p>
    </div>
  );
}

function App() {
  const milestones = ['Skills', 'Projects', '2020'];


  return (
    <div className="App">

      <div className="name-container">
        <svg className="dotted-line" viewBox={`0 0 100 20`}>
          <line x1="50" y1="0" x2="50" y2='20' stroke="rgb(43,120,228)" strokeWidth=".25" strokeDasharray="5,5" />
        </svg>
        <div className="name">Moben Haq</div>
      </div>

      <div className="roadmap">
        <RoadmapLine milestones={milestones} />
        {milestones.map(m => <Milestone key={m} title={m} />)}
      </div>
    </div>
  );
}

export default App;
