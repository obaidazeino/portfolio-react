import React, {useState, useEffect} from "react"
import logo from "./images/personal-logo.svg"
import profile from "./images/profile.svg"
import Parallax from "./Parallax"

function Banner(props) {
    

    return (
        <Parallax 
            rate="1"
            render={function(para){
                return (
                    <header className="banner">
                        {props.children}
                        <div className="left-side">
                            <img className="logo" src={logo} alt=""/>
                            <hgroup 
                            style={para}
                            id="banner-text">
                                <h2>Hi!</h2>
                                <h3>-Graphic Designer</h3>
                                <h3>-Creative Writer</h3>
                                <h3>-Aspiring Web Dev</h3>
                            </hgroup>
                        </div>
                        <div className="right-side">
                            <img src={profile} alt=""/>
                        </div>
                    </header>
                )
        }} />
        
    )
}

export default Banner