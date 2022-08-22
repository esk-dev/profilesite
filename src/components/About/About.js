import React, { useState, useEffect } from "react";
import "./About.scss";
import AnimatedLetters from "../AnimatedLetters";
import StackLogos from "../StackLogos/StackLogos";
function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

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
          <h3>Мои хард скиллы:</h3>
          <ul>
            <li>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`RxJs`}
                idx={1}
              />
            </li>
            <li>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`TypeScript`}
                idx={5}
              />
            </li>
            <li>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`Angular Material`}
                idx={10}
              />
            </li>
            <li>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`SCSS`}
                idx={15}
              />
            </li>
            <li>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`Node JS (Express)`}
                idx={25}
              />
            </li>
            <li>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`Mongo DB`}
                idx={35}
              />
            </li>
            <li>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`React, в начале изучения`}
                idx={45}
              />
            </li>
          </ul>
        </div>
        <StackLogos />
      </div>
    </div>
  );
}

export default About;
