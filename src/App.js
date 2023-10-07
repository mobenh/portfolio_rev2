import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">

      <h1 className="name">Moben Haq</h1>

      <svg className="vLine1">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" />
      </svg>
      <svg className="hLine2">
        <line x1="10%" y1="50%" x2="50%" y2="50%" stroke="black" />
      </svg>
      <svg className="vLine3">
        <line x1="20%" y1="0" x2="20%" y2="50%" stroke="black" />
      </svg>
      <svg className="hLine4">
        <line x1="5.7%" y1="55%" x2="50%" y2="55%" stroke="black" />
      </svg>
      <svg className="vLine5">
        <line x1="87.5%" y1="0" x2="87.5%" y2="50%" stroke="black" />
      </svg>
      <svg className="hLine6">
        <line x1="28.5%" y1="115%" x2="50%" y2="115%" stroke="black" />
      </svg>
      <svg className="vLine7">
        <line x1="49.9%" y1="62.5%" x2="49.9%" y2="100%" stroke="black" />
      </svg>

      <div className="milestone1">
        Languages
      </div>
      <div className="milestone2">
        Projects
      </div>
      <div className="milestone3">
        Framework
      </div>
      <div className="milestone4">
        Infrastructure
      </div>
      <div className="milestone5">
        Certifications
      </div>
      <div className="milestone6">
        Contact Me
      </div>

      <div className="language1">
        <a href="https://github.com/mobenh/Golang-AI-Bot" target="_blank" rel="noopener noreferrer" className="detailLink">
          Golang
        </a>
      </div>
      <div className="language2">
        <a href="https://github.com/mobenh/cpp_bootcamp" target="_blank" rel="noopener noreferrer" className="detailLink">
          C++
        </a>
      </div>
      <div className="language3">
        <a href="https://github.com/mobenh/python_bootcamp" target="_blank" rel="noopener noreferrer" className="detailLink">
          Python
        </a>
      </div>
      <div className="language4">
        <a href="https://github.com/mobenh/javascript-webcrawler" target="_blank" rel="noopener noreferrer" className="detailLink">
          JavaScript
        </a>
      </div>

      <div className="project1">
        <a href="https://github.com/mobenh/angular-EmployeeCRUD" target="_blank" rel="noopener noreferrer" className="detailLink">
          Employee CRUD (Angular)
        </a>
      </div>
      <div className="project2">
        <a href="https://github.com/mobenh/react-portfolio" target="_blank" rel="noopener noreferrer" className="detailLink">
          React Portfolio (React)
        </a>
      </div>

      <div className="framework1">
        <a href="https://github.com/mobenh/react-portfolio" target="_blank" rel="noopener noreferrer" className="detailLink">
          React
        </a>
      </div>
      <div className="framework2">
        <a href="https://github.com/mobenh/angular-WeatherApp" target="_blank" rel="noopener noreferrer" className="detailLink">
          Angular
        </a>
      </div>


      <div className="infrastructure1">
        <a href="https://github.com/mobenh/terraform-aws-ec2instance" target="_blank" rel="noopener noreferrer" className="detailLink">
          Terraform
        </a>
      </div>
      <div className="infrastructure2">
        <a href="https://github.com/mobenh/terraform-aws-ec2instance" target="_blank" rel="noopener noreferrer" className="detailLink">
          Aws
        </a>
      </div>

      <svg className="dotted-line-language">
        <line x1="5.5vw" y1="0%" x2="17vw" y2="0%" stroke="black" strokeDasharray="4,5" />
        <line x1="5.5vw" y1="0%" x2="17vw" y2="5%" stroke="black" strokeDasharray="4,5" />
        <line x1="5.5vw" y1="0%" x2="17vw" y2="10%" stroke="black" strokeDasharray="4,5" />
        <line x1="5.5vw" y1="0%" x2="17vw" y2="15%" stroke="black" strokeDasharray="4,5" />
      </svg>

      <svg className="dotted-line-project">
        <line x1="0vw" y1="40%" x2="10vw" y2="20%" stroke="black" strokeDasharray="4,5" />
        <line x1="0vw" y1="40%" x2="11vw" y2="30%" stroke="black" strokeDasharray="4,5" />
      </svg>

      <svg className="dotted-line-framework">
        <line x1="35%" y1="0" x2="35%" y2="100%" stroke="black" strokeDasharray="4,5" />
      </svg>

      <svg className="dotted-line-infrastructure">
        <line x1="70%" y1="0" x2="70%" y2="100%" stroke="black" strokeDasharray="4,5" />
      </svg>

    </div>
  );
}

export default App;
