import React from "react"
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        Привет,
        <br/>
        Меня зовут Егор
        <br/>
        Я - Frontend Developer
        </h1>
        <h2> Java Script / Angular</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home;
