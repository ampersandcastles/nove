import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import ContactPage from "./ContactPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Main} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
    </Router>
  );
}

export default App;