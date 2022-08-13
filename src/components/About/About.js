import React, { useState, useEffect } from "react";
import "./About.scss";
import AnimatedLetters from "../AnimatedLetters";
function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={`О себе`}
            idx={1}
          />
        </h1>
        <p>
          Я - начинающий frontend разработчик, на данном этапе есть опыт
          стажировки в отделе веб-разработки в компании Yota, где я
          познакомился с фреймворком Angular.
        </p>

        <p>Задачи выполняемые мной на стажировке:</p>
        <ul>
          <li>
            Разработка landing page, c валидируемой формой обратной связи,
            анимацией. Использовалась библиотека основаная на Angular
            Material.
          </li>

          <li>Верстка e-mail рассылок</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
