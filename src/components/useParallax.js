import {useState, useEffect} from "react"


function useParallax(rateProp) {
    const [offset, setOffset] = useState({transform:  "translateX(0px)"});

    useEffect(()=> {
        window.addEventListener("scroll", function(e){
            let rate = (rateProp === "1") ? -window.pageYOffset *2 : -400 + window.pageYOffset *.5
            setOffset({transform: `translateX(${rate}px)`})
        })
    }, [])
    
    
    
    return [offset]
    
}

export default useParallax