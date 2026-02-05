// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DayWrapper from "./components/DayWrapper";
import ProtectedDay from "./components/ProtectedDay";

import Day7 from "./days/Day7";
import Day8 from "./days/Day8";
import Day9 from "./days/Day9";
import Day10 from "./days/Day10";
import Day11 from "./days/Day11";
import Day12 from "./days/Day12";
import Day13 from "./days/Day13";
import Day14 from "./days/Day14";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DayWrapper />} />
          <Route path="/day/7" element={
            <ProtectedDay>
      <Day7 />
    </ProtectedDay>
          } />
          <Route path="/day/8" element={
            <ProtectedDay>
      <Day8 />
    </ProtectedDay>
          } />
          <Route path="/day/9" element={
            <ProtectedDay>
      <Day9 />
    </ProtectedDay>
          } />
          <Route path="/day/10" element={
            <ProtectedDay>
      <Day10 />
    </ProtectedDay>
          } />
          <Route path="/day/11" element={
            <ProtectedDay>
      <Day11 />
    </ProtectedDay>
          } />
          <Route path="/day/12" element={
            <ProtectedDay>
      <Day12 />
    </ProtectedDay>
          } />
          <Route path="/day/13" element={
            <ProtectedDay>
      <Day13 />
    </ProtectedDay>
          } />
          <Route path="/day/14" element={
            <ProtectedDay>
      <Day14 />
    </ProtectedDay>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
