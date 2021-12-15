import React from "react"
import Work from "./Work"
import data from "../data"
import {useParams} from "react-router-dom"


function WorkDetails(){
    let {workPage, detailsPage} = useParams()
    let fullObject = data.find(item => item.id === workPage)
    let object = data.find(item => item.id === workPage).content.find(item => item.id === detailsPage)
    

return(
        <div className="details-page">
            <h2>{fullObject.title}</h2>
            <div className="article">
                <h3>{object.title}</h3>
                <img src={object.image} alt="project"/>
                {!object.extened && <p>{object.body}</p>}
                <p>{object.extended}</p>
            </div>
        </div>
    )
}

export default WorkDetails