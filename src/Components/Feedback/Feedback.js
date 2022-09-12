import React from "react";
import "./Feedback.css";
import feedbackdog from "../../assets/images/feedback-dog.png";
import quote9 from "../../assets/images/quote1.png";
import quote6 from "../../assets/images/qoute6.png";

function Feedback(props) {

const feebackdata = [
    {
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name:"John Doe"
    },
    {
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name:"Micheal James"
    },
    {
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name:"Miz Trott"
    },
    {
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        name:"Harry Styles"
    },
]

const feedbackarr = feebackdata.map(cvalue =>   < div className="border_white">
    
    <div className="qoute_top">
    <img src={quote6}/>
    </div>
    <div className="feedback_card">
    <span style={{color:"white",fontSize:"30px"}}>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
    <p>{cvalue.desc}</p>
    <h5>{cvalue.name}</h5>
    </div>
    <div className="qoute_bottom">
    <img src={quote9}/>
    </div>

</div>)

  return (
    <div className="Feedback">
      <div className={props.pagename === "aboutpage"?"Feedback_img_1_reverse":"Feedback_img_1"}>
        <img src={feedbackdog} />
      </div>
      <div className="feedback_top">
      <h1>Our Client Feedback</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="feedback_bottom">
        {
          feedbackarr[0]
        }
        {
          feedbackarr[1]
        }
      </div>
    </div>
  );
}

export default Feedback;
