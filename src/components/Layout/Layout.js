import React from 'react'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'
import Home from '../Home/Home'
import About from '../About/About'
const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Home/>
        <About/>
      </div>
    </div>
  )
}

export default Layout;
