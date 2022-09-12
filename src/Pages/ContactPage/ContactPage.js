import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import PageHeader from '../../Components/PageHeader/PageHeader'
import "./ContactPage.css"
function ContactPage() {
  return (
    <>
    <PageHeader name="Contact Us" picture={require(`../../assets/images/gallery-dog2.png`)} />
    <div className='ContactPage'>
        <Contact pagename="contactpage"/>
    </div>
    <Footer />
    </>
  )
}

export default ContactPage