import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence, motion, useScroll } from "framer-motion";

import { Header } from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";

import "./style/style.scss";

function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  return (
    <div className="darkTheme">
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="progress-bar"
      ></motion.div>
      <Header />
      <div className="container">
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />

            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
