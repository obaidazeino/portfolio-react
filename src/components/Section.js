import React from "react"
import {Link} from "react-router-dom"


function Section(props) {
    console.log(props)
    return(
        <div className="writing-section carousel-item">
            <div className="writing-wrapper">
                <div className="writing-container">
                    <h3>{props.object.title}</h3>
                    <Link to={`/portfolio-react/${props.object.id}`}>see more</Link>
                </div>
                <div className="pens-container">
                    <img src={props.object.image} alt=""/>
                </div>
            </div>  
        </div>
    )
}

export default Section