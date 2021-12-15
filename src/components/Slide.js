import React from "react"
import {Link} from "react-router-dom"

function Slide(props) {
    console.log(props.params)
    console.log(props.object.id)
    
    
    return(
        
            <div className="content-card">
                <img src={props.object.image}/>
                <div className="content-card-text">
                    <h3>{props.object.title}</h3>
                    <p>{props.object.body}</p>
                    {props.object.link ? 
                        <a href={props.object.link}>Visit</a> :
                        <Link to={`${props.object.id}`}>See more</Link>
                        }
                </div>
            </div>
           
    )
}

export default Slide