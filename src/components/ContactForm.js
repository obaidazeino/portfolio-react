import React from "react"
import abstract from "./images/abstract.png"

function ContactForm() {


    return(
        <div className="form-section">
            <div className="form-container">
                <img src={abstract} alt=""/>
                <div className="form-text">
                    <form>
                        <h4>Contact me!</h4>
                        <label for="title">Title</label>
                        <input placeholder="title" id="title"/>
                        <label for="message">Message</label>
                        <textarea placeholder="message" id="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
                

        </div>
    )
}

export default ContactForm