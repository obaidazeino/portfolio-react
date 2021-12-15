import React from "react"
import {Link, Routes, Route, useParams} from "react-router-dom"
import data from "../data"
import Slide from "../components/Slide"

function WorkHome(props){
    
    console.log(props)

    let content = data.find(item => item.id === props.params).content.map(item =>
        {return(
            
            <Slide object={item}/>
            
        )}
        )

    return(
        <div className="slide carousel-item">
                <div className="slide-container">    
                    {content}
                </div>
            </div>
    )

}

export default WorkHome