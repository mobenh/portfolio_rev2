import React from 'react';
import './App.css';

function RoadmapLine({ milestones }) {
  return (
    <svg className="roadmap-line" viewBox={`0 0 100 ${milestones.length * 100}`}>
      {milestones.map((_, index) => (
        <line x1="50" y1={index * 100} x2="50" y2={(index + 1) * 100} stroke="rgb(43,120,228)" strokeWidth=".75"/>
      ))}
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
  const milestones = ['Skills', 'Projects', '2020']; // This can be a state or derived from props

  return (
    <div className="App">
      <div className="name">Moben Haq</div>

      <div className="roadmap">
        <RoadmapLine milestones={milestones} />
        {milestones.map(m => <Milestone key={m} title={m} />)}
      </div>
    </div>
  );
}

export default App;
