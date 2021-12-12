import React from "react"
import './App.css';
import Banner from "./components/Banner"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Map from "./components/Map"
import Nav from "./components/Nav"
import Quote from "./components/Quote"
import Section from "./components/Section"
import writingImg from "./components/images/writing.svg"
import graphicImg from "./components/images/trees.svg"
import Parallax from "./components/Parallax"

function App() {
  return (
    <div className="App">
      <Parallax rate="1">
        {(para)=> (
        <Banner data={para}>
          <Nav />
        </Banner>
        )}        
      </Parallax>
      
      <main>
      <Parallax rate="2">
        {para => (
          <Map data={para}/>
        )}
      </Parallax>
        <Section text="Creative writing" img={writingImg} />
        <Quote />
        <Section text="Graphic Design" img={graphicImg} />
        <ContactForm />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
