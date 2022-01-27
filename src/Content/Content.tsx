import React from "react";
import { Competitions, Matches } from "../components";
import { Routes, Route, useParams } from "react-router-dom";

const Content = () => {
  return (
    <div id="content" className="container">
      <Routes>
        <Route path="/" element={<Matches />} />
        <Route path="/competitions" element={<Competitions />} />
      </Routes>
    </div>
  );
};

export default Content;
