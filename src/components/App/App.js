import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../PageTools/ScrollToTop/ScrollToTop";

import Home from "../Home/Home";

import Experiences from "../Experiences/Experiences";

import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
