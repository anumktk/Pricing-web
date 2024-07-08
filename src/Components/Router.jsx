import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Payment from "./Payment";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
