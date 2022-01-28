import React from "react";
import { Competitions, Matches } from "../components";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <div id="content" className="container">
      <Routes>
        <Route path='/Football-Stat' element={<Matches />} />
        <Route path="/competitions" element={<Competitions />} />
      </Routes>
    </div>
  );
};

export default Content;
