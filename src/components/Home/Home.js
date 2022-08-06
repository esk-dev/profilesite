import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _2`}>i,</span>
          <br/>
          <span className={`${letterClass} _3`}>I</span>
          <span className={`${letterClass} _4`}>'m </span>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={' Egor'}
        idx={6}/>
        <br/>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={'Junior Frontend Developer'}
        idx={15}
        />
        </h1>
        <h2> Java Script / Angular</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home;
