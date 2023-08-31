import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../PageTools/ScrollToTop/ScrollToTop";

import Home from "../Pages/Home/Home";
import Experiences from "../Pages/Experiences/Experiences";
import Resume from "../Pages/Resume/Resume";

import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
