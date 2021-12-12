import React, {useState, useEffect} from "react"


function Parallax(props) {
    const [offset, setOffset] = useState({transform: "translateX(0px)"});

    useEffect(()=> {
        window.addEventListener("scroll", function(e){
            let rate = (props.rate === "1") ? -window.pageYOffset *2 : -400 + window.pageYOffset *.5
            setOffset({transform: `translateX(${rate}px)`})
        })
    }, [])
    
    
    
    return(
        // props.render(offset) ||
        props.children(offset)
    )
}

export default Parallax