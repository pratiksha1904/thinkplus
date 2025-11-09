import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes wrapped by Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Shows HeroSection */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
