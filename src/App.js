import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Roadmap Portfolio</h1>

        <div className="roadmap">
          <div className="milestone">
            <h2>2015</h2>
            <p>Started Computer Science degree at XYZ University.</p>
          </div>

          <div className="milestone">
            <h2>2018</h2>
            <p>Interned at ABC Company. Worked on web applications using React and Node.js.</p>
          </div>

          <div className="milestone">
            <h2>2020</h2>
            <p>Graduated from XYZ University. Joined DEF Corp as a Software Engineer.</p>
          </div>

          {/* ... Add more milestones as needed ... */}
        </div>
      </header>
    </div>
  );
}

export default App;
