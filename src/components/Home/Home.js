import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './Home.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={`Привет,`}
        idx={1}/>
        <br/>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={'Меня зовут Егор'}
        idx={1}/>
        <br/>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={'Я - Junior Frontend Developer'}
        idx={1}
        />
        </h1>
        <h2> Java Script / Angular</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home;
