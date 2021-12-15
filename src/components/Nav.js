import React, {useState} from "react"
import {Link} from "react-router-dom"

function Nav() {
    const [nav, toggleNav] = useState(false)

    function handleClick() {
        toggleNav(prevNav => !prevNav)
        console.log(nav)
    }



    return (

        <div class="ham-with-nav">
            <div 
            class="side-nav"
            style={{width: (nav) ? "250px" : "0"}}
            >
                <div class="side-nav-container" onClick={handleClick}>
                    <p tabIndex="0" id="arrow">-</p>
                    <nav>
                    <ul>
                        <li><Link to="/portfolio-react">Home</Link></li>
                        <li><Link to="/portfolio-react/1">Creative Writing</Link></li>
                        <li><Link to="/portfolio-react/2">Graphic Design</Link></li>
                        <li><Link to="/portfolio-react/3">Web Development</Link></li>
                    </ul>
                    </nav>
                    <div class="contactinfo">
                    <address class="contact2">Contact:<br/>
                    1503-2001 Carling Ave,<br/> Ottawa, ON K2A 3W5
                    </address>
                    <a href="tel:+15144766190">+15144766190</a><br/>
                    <a href = "mailto: obaidazeino@hotmail.com">obaidazeino@hotmail.com</a>
                    </div>
                            <div class="social">
                    <a href="#"><svg id="fb" xmlns="http://www.w3.org/2000/svg" width="145.1" height="144.2" viewBox="0 0 145.1 144.2"><path d="M145.1 72.5a72.6 72.6 0 1 0-83.9 71.7V93.5H42.8v-21h18.4V56.6c0-18.2 10.8-28.3 27.4-28.3a105.4 105.4 0 0 1 16.2 1.5v17.8h-9.1c-9 0-11.8 5.6-11.8 11.3v13.6H104l-3.2 21H83.9v50.7a72.7 72.7 0 0 0 61.2-71.7z"/></svg></a>
                    <a href="#"><svg id="ig" xmlns="http://www.w3.org/2000/svg" width="144.2" height="144.2" viewBox="0 0 144.2 144.2"><path d="M72.1 0c-19.6 0-22 .1-29.7.4S29.5 2 24.9 3.8a34.4 34.4 0 0 0-12.8 8.3 34.4 34.4 0 0 0-8.3 12.8C2 29.5.8 34.7.4 42.4S0 52.5 0 72.1s.1 22 .4 29.7 1.6 12.9 3.4 17.5a35.2 35.2 0 0 0 8.3 12.8 34.4 34.4 0 0 0 12.8 8.3 51.3 51.3 0 0 0 17.5 3.3c7.7.4 10.1.5 29.7.5s22-.1 29.7-.5a51.3 51.3 0 0 0 17.5-3.3 35.2 35.2 0 0 0 12.8-8.3 34.4 34.4 0 0 0 8.3-12.8 51.3 51.3 0 0 0 3.3-17.5c.4-7.7.5-10.1.5-29.7s-.1-22-.5-29.7a51.3 51.3 0 0 0-3.3-17.5 34.4 34.4 0 0 0-8.3-12.8 34.4 34.4 0 0 0-12.8-8.3c-4.6-1.8-9.8-3-17.5-3.4S91.7 0 72.1 0zm0 13c19.2 0 21.5.1 29.1.4s10.9 1.5 13.4 2.5a22.1 22.1 0 0 1 8.3 5.4 22.1 22.1 0 0 1 5.4 8.3c1 2.5 2.2 6.3 2.5 13.4s.4 9.8.4 29.1-.1 21.5-.5 29.1-1.5 10.9-2.5 13.4a23.9 23.9 0 0 1-13.7 13.7c-2.5 1-6.4 2.2-13.4 2.5s-9.9.4-29.2.4-21.5-.1-29.2-.5-10.9-1.5-13.4-2.5a22.1 22.1 0 0 1-8.3-5.4 22.1 22.1 0 0 1-5.4-8.3c-1-2.5-2.2-6.4-2.5-13.4s-.4-9.9-.4-29.1.1-21.5.4-29.2 1.5-10.9 2.5-13.4a22.1 22.1 0 0 1 5.4-8.3 21 21 0 0 1 8.3-5.4c2.5-1 6.3-2.2 13.3-2.5s9.9-.4 29.2-.4zm0 22.1a37 37 0 1 0 37 37 37 37 0 0 0-37-37zm0 61a24 24 0 1 1 24-24 23.9 23.9 0 0 1-24 24zm47.1-62.5a8.7 8.7 0 1 1-8.6-8.6 8.7 8.7 0 0 1 8.6 8.6z"/></svg></a>
                    <a href="#"><svg id="be" xmlns="http://www.w3.org/2000/svg" width="174" height="109" viewBox="0 0 174 109"><path d="M0 0v107h51.9a54.3 54.3 0 0 0 14-1.8A37.2 37.2 0 0 0 78 99.7a27.5 27.5 0 0 0 8.5-9.7 29.6 29.6 0 0 0 3.1-14.1c0-6.6-1.6-12.4-4.8-17.1s-8.1-8.1-14.7-10A27 27 0 0 0 81 40a23.9 23.9 0 0 0 3.7-13.5 29.4 29.4 0 0 0-2.5-12.6 20.5 20.5 0 0 0-7-8.1 27.6 27.6 0 0 0-10.8-4.4A60 60 0 0 0 50.5 0zm113.6 7.2v10.5H157V7.2zm-90 11h22a30.8 30.8 0 0 1 6.1.6 14.6 14.6 0 0 1 5.2 1.8 10.1 10.1 0 0 1 3.6 3.8 12.3 12.3 0 0 1 1.3 6.1c0 4.5-1.3 7.8-4 9.7a17.3 17.3 0 0 1-10.4 3H23.6zm112.7 9.1a40.4 40.4 0 0 0-16.2 3.2 39.7 39.7 0 0 0-12.6 8.6 40.2 40.2 0 0 0-8.1 13 45.2 45.2 0 0 0-2.8 16.2 48.4 48.4 0 0 0 2.7 16.5 38.8 38.8 0 0 0 7.9 13 36 36 0 0 0 12.5 8.3 46.3 46.3 0 0 0 16.6 2.9c8.7 0 16.2-2 22.4-6s10.8-10.7 13.8-20h-18.7c-.8 2.4-2.6 4.7-5.7 6.9a19.3 19.3 0 0 1-11.1 3.2c-6 0-10.6-1.6-13.8-4.7s-5.3-8.9-5.3-15h55.9a55.1 55.1 0 0 0-1.4-17.3 43.1 43.1 0 0 0-6.8-14.7 34.2 34.2 0 0 0-12.1-10.2 36.6 36.6 0 0 0-17.2-3.9zm-.7 16.1c5.2 0 9.5 1.5 12.1 4.3a21.1 21.1 0 0 1 4.9 12.3h-34.7a28.5 28.5 0 0 1 1-5.1 13.9 13.9 0 0 1 2.9-5.5 16.4 16.4 0 0 1 5.3-4.3 19.5 19.5 0 0 1 8.5-1.7zm-112 15.9h25.6c5.1 0 9.2 1.2 12.3 3.5s4.6 6.3 4.6 11.8a14.3 14.3 0 0 1-1.4 7 11.1 11.1 0 0 1-3.8 4.2 14.7 14.7 0 0 1-5.6 2.3 28.4 28.4 0 0 1-6.6.7H23.6z"/></svg></a>
                    </div>
                </div>
            </div>
            <svg onClick={handleClick} tabIndex="0" id="hamburger" xmlns="http://www.w3.org/2000/svg" width="299.6" height="272.8" viewBox="0 0 299.6 272.8"><rect width="299.6" height="53.59" fill="#012623" rx="26.8"/><rect width="299.6" height="53.59" y="109.6" fill="#012623" rx="26.8"/><rect width="299.6" height="53.59" y="219.2" fill="#012623" rx="26.8"/></svg>
        </div>
    )
}

export default Nav