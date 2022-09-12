import React from 'react'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Feedback from '../../Components/Feedback/Feedback'
import Footer from '../../Components/Footer/Footer'
import PageHeader from '../../Components/PageHeader/PageHeader'

function AboutPage() {
  return (
    <div>
        <PageHeader name="About Me" picture={require(`../../assets/images/gallery-dog2.png`)}/>
        <About pagename="aboutpage"/>
        <Feedback pagename="aboutpage"/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default AboutPage