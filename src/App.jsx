import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/github"
              element={
                <main style={{ padding: "2rem", minHeight: "100vh" }}>
                  <h2>GitHub Section</h2>
                  <p>GitHub content goes here...</p>
                </main>
              }
            />
            <Route
              path="*"
              element={
                <main style={{ padding: "2rem", minHeight: "50vh" }}>
                  <h2>404 - Page Not Found</h2>
                </main>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
