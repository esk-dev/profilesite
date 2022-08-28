import React, { useState, useEffect } from "react";
import "./About.scss";
import AnimatedLetters from "../AnimatedLetters";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
  }, []);

  return (
    <div className="container about-page">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={`О себе`}
          idx={1}
        />
      </h1>
      <div className="content-zone">
        <div className="text-zone">
          <p>
            Привет! Меня зовут Егор, и мне нравится создавать вещи, которые
            живут в Интернете.
            <br></br>
            <br></br>
            Мой интерес к веб-разработке начался в 2021 году, когда я решил
            попробовать сделать сайт как выпускной проект — создание нескольких
            страниц научило меня многому в HTML и CSS! Также я узнал о том что
            JS имеет более серьезные возможности чем анимация страниц.
            <br></br>
            Так я начал изучение веб-разработки.
            <br></br>
            <br></br>
            Перенесемся в сегодняшний день, я имел опыт постажироваться в отделе
            веб-разработки в компании Yota, где я познакомился с фреймворком
            Angular и более серьезно углубился в создание веба. Из проектов
            сделанных там, я могу выделить создание лендинга c использованием
            Angular Material.
          </p>
        </div>
        <div className="scene">
          <div className="icons-zone">
            <div className="face1 skills-wrapper">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2 skills-wrapper">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3 skills-wrapper">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4 skills-wrapper">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5 skills-wrapper">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6 skills-wrapper">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
