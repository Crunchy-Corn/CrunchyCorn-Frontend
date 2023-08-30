import React, { useState } from "react";
import "./styles/global.scss";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About/About"
import ChoiceGame from "./pages/Choice/ChoiceGame"
import ChoiceNum from "./pages/Choice/ChoiceNum"
import ChoiceTime from "./pages/Choice/ChoiceTime"
import Result from "./pages/Result/Result"

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/choiceGame" element={<ChoiceGame />}/>
      <Route path="/choiceNum" element={<ChoiceNum />}/>
      <Route path="/choiceTime" element={<ChoiceTime />}/>
      <Route path="/result" element={<Result />}/>


    </Routes>
  );
}

export default App;
