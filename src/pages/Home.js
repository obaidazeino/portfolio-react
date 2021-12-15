import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Banner from "../components/Banner"
import Map from "../components/Map"
import Quote from "../components/Quote"
import Section from "../components/Section"
import writingImg from "../components/images/writing.svg"
import graphicImg from "../components/images/trees.svg"
import Parallax from "../components/Parallax"
import Carousel from "../components/Carousel"
import Carousels from "../components/Carousels"
import data from "../data"

function Home(){
    const carousels = data.map(item => {
        return <Carousel key={item.id} object={item}/>
    })
console.log(Carousels)

    return (
        <div>
            <Parallax rate="1">
                {(para)=> (
                <Banner data={para}/>
                )}        
            </Parallax>
            
            <main>
                <Parallax rate="2">
                    {para => (
                    <Map data={para}/>
                    )}
                </Parallax>

                {/* <Carousels /> */}

                {carousels}

                {/* <Section text="Creative writing" img={writingImg} />
                <Section text="Graphic Design" img={graphicImg} /> */}
                <Quote />
            </main>
        </div>
    )
}

export default Home