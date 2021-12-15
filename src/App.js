import React from "react"
import './App.css';
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import {Link, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Work from "./pages/Work"
import data from "./data"
import WorkDetails from "./pages/WorkDetails";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route end="true" path="/portfolio-react" element={<Home />}/>
        <Route end="true" path="/portfolio-react/:workPage" element={<Work />}/>
          <Route end="true" path="/portfolio-react/:workPage/:detailsPage" element={<WorkDetails/>}/>
      </Routes>
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;
