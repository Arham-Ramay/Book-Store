import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ContextPart from "./components/ContextPart";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <Router>
      <>
        <Header />
        <ContextPart>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </ContextPart>
      </>
    </Router>
  );
}

export default App;
