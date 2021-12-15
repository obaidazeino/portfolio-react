import React, {useState} from "react"
import useParallax from "./useParallax"

function Map(props) {
    let [opacity, setOpacity] = useState({opacity: "0"})
    let [country, setCountry] = useState("")

    function handleMouseenter(event) {
        setOpacity({opacity: "1"})
        setCountry(event.target.id)
    }

    function handleMouseleave() {
        setOpacity({opacity: "0"})
    }


    return (
        <div>
           <div className="map-section">
                <div className="map-container">
                    <svg id="map" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="602.5" height="321.5" viewBox="0 0 602.5 321.5"><g id="map">
                        <path d="M563.1,136.7c-11.9-24.4-24.7-49.7-46.7-65.5s-56.3-18-73.9,2.7c-13.6,15.9-13,39.7-6.9,59.7s16.8,38.4,21.9,58.7,2.7,44.5-13.2,58c-18,15.2-46.7,10.4-64.9-4.6s-28.1-37.5-36.9-59.3-17.6-44.5-34.3-61.2S264.4,99.9,244,111.6c-22.4,12.7-27.4,43.4-22.7,68.7s16.6,49.3,18.3,75.1-11.6,55.7-37.1,59.8c-23.4,3.9-44.5-16.2-54.6-37.7s-13.7-45.9-25.8-66.4-37.9-36.5-59.4-26.2" fill="none" stroke="#012623" stroke-miterlimit="10" stroke-width="11.52" stroke-dasharray="29.32"/>
                        <path id="mars" onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave} data-name="mars?" d="M532.4,57.5h0a41.1,41.1,0,0,1,58.1,58.1l-29.1,29-29-29A41,41,0,0,1,532.4,57.5Zm29,50.7a21.7,21.7,0,1,0-21.7-21.7A21.7,21.7,0,0,0,561.4,108.2Z" fill="#012623"/>
                        <path id="canada" onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave} d="M377.2,156.7h0a41.1,41.1,0,1,1,58.1,58.1l-29,29-29.1-29A41.2,41.2,0,0,1,377.2,156.7Zm29.1,50.7a21.7,21.7,0,1,0-21.7-21.7A21.7,21.7,0,0,0,406.3,207.4Z" fill="#012623"/>
                        <path id="us" onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave} data-name="united states" d="M230,12h0a41.1,41.1,0,0,1,58.1,58.1L259,99.2,230,70.1A41,41,0,0,1,230,12Zm29,50.8a21.7,21.7,0,1,0-21.7-21.7A21.7,21.7,0,0,0,259,62.8Z" fill="#012623"/>
                        <path id="armenia" onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave} d="M167.2,212h0a41.1,41.1,0,0,1,58.1,58.1l-29.1,29-29-29A41,41,0,0,1,167.2,212Zm29,50.8A21.8,21.8,0,1,0,174.5,241,21.8,21.8,0,0,0,196.2,262.8Z" fill="#012623"/>
                        <path id="syria" onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave} d="M12,98.6h0a41.1,41.1,0,1,1,58.1,58.1l-29,29L12,156.7A41.2,41.2,0,0,1,12,98.6Zm29.1,50.7a21.7,21.7,0,1,0-21.7-21.7A21.7,21.7,0,0,0,41.1,149.3Z" fill="#012623"/></g>
                    </svg>
                    <h3 id="places-text" style={useParallax("2")[0]}>Places I called Home...</h3>
                </div>
            </div>
            <div className="country-container">
                <p style={opacity} className="card">{country}</p>
            </div> 
        </div>
    )
}

export default Map