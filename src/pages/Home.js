import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Banner from "../components/Banner"
import Map from "../components/Map"
import Quote from "../components/Quote"
import Section from "../components/Section"

import data from "../data"

function Home(){
    const sections = data.map(item => {
        return <Section key={item.id} object={item}/>
    })

    return (
        <div>
            <Banner /> 
            <main>
                <Map />
                {sections}
                <Quote />
            </main>
        </div>
    )
}

export default Home