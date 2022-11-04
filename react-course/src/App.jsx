import React from "react";
import "./global.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HelloList } from "./components/hello-list";
import { HelloWorld } from "./components/hello-world";
export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/list" element={<HelloList />} />
          <Route path="/" element={<HelloWorld />} />
        </Routes>
      </div>
    </Router>
  );
}
