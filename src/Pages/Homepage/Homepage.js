import React from 'react'
import About from '../../Components/About/About'
import Book from '../../Components/Book/Book'
import Contact from '../../Components/Contact/Contact'
import Feedback from '../../Components/Feedback/Feedback'
import Footer from '../../Components/Footer/Footer'
import Gallery from '../../Components/Gallery/Gallery'
import Landing from '../../Components/Landing/Landing'
import "./Homepage.css"

function Homepage() {
  return (
    
    <div className='Homepage'>
        <Landing/>
        <About pagename="homepage"/>
        <Gallery/>
        <Book pagename="homepage"/>
        <Feedback pagename="homepage"/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Homepage