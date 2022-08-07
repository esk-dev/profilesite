import React from 'react'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout  from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import './app.scss';
function App() {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        ke={location.pathname}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
            </Route>
          </Routes>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
