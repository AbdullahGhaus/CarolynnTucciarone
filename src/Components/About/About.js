import React from 'react'
import "./About.css"
import authorimg from "../../assets/images/author-img.png"

import {Link} from "react-router-dom";

function About(props) {
  return (
    <div  className={props.pagename === "aboutpage"?"About_reverse":"About"}>
        <div className='about_left'>
            <h1>About Author</h1>
            <p>I am an avid reader, and during sequestration due to this Pandemic, I decided to contribute to the reading world with the help of my experiences that I gained through volunteering at a rescue and my subsequent travel to China. This book is about what has brought me here. This is the first book of the series. I have already completed the sequel. I am on book three now. This book is about my trip to China and bringing home the fur babies. I have added spicy drama and mystery to my book! I laughed a lot, adding the names of the people and the dogs in the mystery as all of them are my family and friends. <br/> This trip taught me that there are many animals all around the world that need to be rescued. All they need is our love and attention. I feel my book will appeal to every animal lover around the globe.
            </p>
           <Link to="/about"> <button className={props.pagename === "aboutpage"?"displaynone":"btn"}>Read More</button></Link>
        </div>
        <div className='about_right'>
            <img src={authorimg} />
        </div>
    </div>
  )
}

export default About