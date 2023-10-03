import React from "react";
import { Roadmap } from "react-roadmap";

const App = () => {
  const roadmapData = [
    {
      id: 1,
      title: "Learn HTML and CSS",
      description: "Learn the basics of HTML and CSS to create static web pages.",
      status: "Done",
    },
    {
      id: 2,
      title: "Learn JavaScript",
      description: "Learn the basics of JavaScript to add interactivity to your web pages.",
      status: "In Progress",
    },
    // ...
  ];

  return (
    <div>
      <h1>My Portfolio</h1>
      <Roadmap data={roadmapData} />
    </div>
  );
};

export default App;