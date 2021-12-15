import React, {useState, useEffect, useRef} from "react"

import Slide from "./Slide"
import Section from "./Section"

function Carousel(props){
    // const [active, setActive] = useState(true)
    

    return(
        <div className="carousel">
            {/* <div class="arrows">
                <span onClick={()=> setActive(true)}>-</span>
                <span onClick={()=>setActive(false)}>-</span>
            </div> */}
            
            <Section text={props.object.title} img={props.object.image}/>
            {/* <Slide object={props.object}/>  */}
        </div>
    )
}

export default Carousel