import React from 'react'
import "./Landing.css"
import landingdog from "../../assets/images/dog-landing.png"

function Landing() {
  return (
    <div className='Landing'>
        <div className='landing_left'>
          <p>Welcome to Carolynntucciarone</p>
          <h1>Dogs Leave Paw Prints Forever On Our Hearts</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
Lorem Ipsum has been the industry's standard dummy text.</p>
          <button className='btn'>Explore More</button>
        </div>
        <div className='landing_right'>
          <img src={landingdog} />
        </div>
    </div>
  )
}

export default Landing;