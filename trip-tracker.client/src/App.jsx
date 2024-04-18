import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Trips from "./components/Trip/Trips";
function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/trips" element={Trips} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
