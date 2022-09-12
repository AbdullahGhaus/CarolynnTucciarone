import React from 'react'
import "./Footer.css"
import visa from "../../assets/images/visa.png";
import masterunion from "../../assets/images/masterunion.png";
import paypal from "../../assets/images/paypal.png";
import visa2 from "../../assets/images/visa2.png";
import masterunion2 from "../../assets/images/masterunion2.png";
import footedog from "../../assets/images/footer-dog.png"
function Footer() {

    const footerdata = [
        // {
        //     icon:"footer-address",
        //     head:"",
        //     desc:"54B, Lipsum Road 5238 MT, La city, IA 522364"
        // },
        // {
        //     icon:"footer-phone",
        //     head:"CALL US AT",
        //     desc:"123-456-789-0000"
        // },
        {
            icon:"footer-email",
            head:"EMAIL US AT",
            desc:"info@company.com"
        },
    ]

    const footerdataarr = footerdata.map(cvalue => <>
        
        <div className='footer_data'>
            <div className='footer_data_top'>
                <img src={require(`../../assets/images/${cvalue.icon}.png`)} />
            </div>
            <div className='footer_data_bottom'>
                <p>{cvalue.head}</p>
                <p>{cvalue.desc}</p>
            </div>
        </div>
    
    </>)
    
  return (
    <div className="Footer">
        <div className='footer_dog_img'>
            <img src={footedog}/>
        </div>
        <div className='footer_top'>

            {footerdataarr}
        </div>
        <div className='footer_bottom'>
            <p>Carolynntucciarone © Copyrights  2022 All Rights Reserved</p>
            <div className='footer_payments'>
            <img src={visa} />
            <img src={paypal} />
            <img src={masterunion} />
            <img src={visa2} />
            <img src={masterunion2} />
            </div>
        </div>
    </div>
  )
}

export default Footer