import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Style.css';
import Header from "./Header";
import Main from "./Main";
import About from "./About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Main} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;