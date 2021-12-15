import React from "react"
import './App.css';
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import {Link, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/portfolio-react" element={<Home />}></Route>
      </Routes>
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;
