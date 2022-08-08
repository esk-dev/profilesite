import React from 'react'
import './About.scss'
import Roadmap from './roadmap/Roadmap';

function About() {
  return (
    <div className="container about-page">
      <Roadmap />
      <div className="text-zone">
        <h1>About me and my experience</h1>
        <div className="content">
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default About;
