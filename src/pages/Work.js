import React from "react"
import {Link, Routes, Route, useParams} from "react-router-dom"
import data from "../data"
import Slide from "../components/Slide"


function Work() {
    console.log(useParams())
    let {workPage} = useParams()
    console.log(data.find(item => item.id === workPage))

    let content = data.find(item => item.id === workPage).content.map(item =>
        {return(
            
            <Slide params={workPage} object={item}/>
            
        )}
        )
    
    return(
       <div className="work-page">
            <h2>{data.find(item => item.id === workPage).title}</h2>
            <div className="slide carousel-item">
                <div className="slide-container">    
                    {content}
                </div>
            </div>
       </div> 
    )
}

export default Work