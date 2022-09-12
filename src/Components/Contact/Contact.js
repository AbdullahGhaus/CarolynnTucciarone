import React from "react";
import "./Contact.css";
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/TwT.png"
import instagram from "../../assets/images/Ig.png"
import linkedin from "../../assets/images/Ln.png"
import contactdog from "../../assets/images/contact-dog.png"

function Contact(props) {
  const contactinfo = [
    // {
    //   icon: "Phone",
    //   head: "Phone Number",
    //   desc: "123-456-789-0000",
    // },
    {
      icon: "Email",
      head: "Email Address",
      desc: "info@company.com",
    },
    // {
    //   icon: "Location",
    //   head: "Our Location",
    //   desc: "Sample Street, Manchester, USA 12345.",
    // },
  ];

  

  const contactinfoarr = contactinfo.map((cvalue) => (
    <>
      <div className="contact_detail">
        <div className="contact_detail_left">
          <img src={require(`../../assets/images/${cvalue.icon}.png`)} />
        </div>
        <div className="contact_detail_right">
          <h4>{cvalue.head}</h4>
          <p>{cvalue.desc}</p>
        </div>
      </div>
    </>
  ));
  return (
    <div className="Contact">
 
      <div className="contact_left">
 
        <h1>Contact Info</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        {contactinfoarr}
        <div className="contact_social">
            <img src={facebook} /> 
            <img src={twitter} /> 
            <img src={instagram} /> 
            <img src={linkedin} /> 
                   </div>
      </div>
      <div className="contact_right">
      <div className={props.pagename === "contactpage"?"displaynone":"contact_dog"}>
                <img src={contactdog} />
        </div>
      <h1>CONTACT US</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="contact_form">
        <form >
            <input type="text" placeholder="Enter Your Full Name" required/>
            <input type="email" placeholder="Enter Your Email Address" required/>
            <input type="text" placeholder="Enter Your Subject" required/>
            <textarea placeholder="Type Your Message Here!" rows="10" required/>
            <button type="submit" className="btn">Send Your Message</button>
        </form>
       
      </div>
      </div>


    </div>
  );
}

export default Contact;
