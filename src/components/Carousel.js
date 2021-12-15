import React from "react"

import Slide from "../components/Parallax"
import Section from "../components/Section"

function Carousel(props){
    console.log(Section)
    return(
        <div className="carousel">
            <Section text={props.object.title} img={props.object.image}/>
            <Slide/>
        </div>
    )
}

export default Carousel