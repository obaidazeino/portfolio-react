import React from "react"
import './App.css';
import Banner from "./components/Banner"
import ContactForm from "./components/ContactForm"
import Countries from "./components/Countries"
import Footer from "./components/Footer"
import Map from "./components/Map"
import Nav from "./components/Nav"
import Quote from "./components/Quote"
import Section from "./components/Section"

function App() {
  return (
    <div className="App">
      <Banner>
        <Nav />
      </Banner>
      {/* <Map />
      <Countries />
      <Section text="Creative writing" img="images/writing.svg" />
      <Quote />
      <Section text="Graphic Design" img="images/trees.svg" />
      <ContactForm/>
      <Footer/> */}
    </div>
  );
}

export default App;
