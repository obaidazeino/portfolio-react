import React, {useState, useEffect} from "react"
import logo from "./images/personal-logo.svg"
import profile from "./images/profile.svg"

function Banner(props) {
    const [offset, setOffset] = useState({transform: "translateY(0px)"});

    useEffect(()=> {
        window.addEventListener("scroll", function(e){
        let rate = -window.pageYOffset *2

        setOffset({transform: `translateY(${rate}px)`})
        console.log(offset)
        })
    }, [])

    return (
        <header className="banner">
            {props.children}
            <div class="left-side">
                <img class="logo" src={logo} alt=""/>
                <hgroup 
                style={offset}
                id="banner-text">
                    <h2>Hi!</h2>
                    <h3>>Graphic Designer</h3>
                    <h3>>Creative Writer</h3>
                    <h3>>Aspiring Web Dev</h3>
                </hgroup>
            </div>
            <div class="right-side">
                <img src={profile} alt=""/>
            </div>
        </header>
    )
}

export default Banner