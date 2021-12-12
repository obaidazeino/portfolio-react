import React from "react"



function Section(props) {

    return(
        <div className="writing-section">
            <div className="writing-wrapper">
                <div className="writing-container">
                    <h3>{props.text}</h3>
                    <a href="#">see more</a>
                </div>
                <div className="pens-container">
                    <img src={props.img} alt=""/>
                </div>
            </div>  
        </div>
    )
}

export default Section