import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./app.scss";
import Loader from "react-loaders";
const loader = <Loader color={'#86BBD8'} type="ball-rotate" />;
const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={loader}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={loader}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <React.Suspense fallback={loader}>
              <Projects />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={loader}>
              <Contact />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
