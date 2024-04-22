import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Trips } from "./components/Trip/Trips";
import { Create } from "./components/Trip/Create";
import { Update } from "./components/Trip/Update";
import { Delete } from "./components/Trip/Delete";
function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
