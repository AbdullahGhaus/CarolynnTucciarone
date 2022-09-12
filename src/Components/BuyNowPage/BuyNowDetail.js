import React from 'react'
import "./BuyNowDetail.css"
import { useLocation } from 'react-router-dom';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import trailerbg from "../../assets/images/trailer-bg.png";

function BuyNowDetail(props) {
  console.log("Porps")
console.log(props)
  return (
    <div className='BuyNowDetail'> 
    <div className='buynowdetail_left'>
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    <div className='BuyNowDetail_pricing'>
    {props.paperback === ""?<></>:<><a href={`https://www.amazon.com/gp/product/${props.link}`}><span>Paperback - ${props.paperback} (BUY FROM AMAZON)</span></a></>}
    {/* <a href={`https://www.amazon.com/gp/product/${props.link}`}><span>Paperback - ${props.paperback} (BUY FROM AMAZON)</span></a> */}
    {props.Ebook === ""?<></>:<><a href={`https://www.amazon.com/gp/product/${props.link}`}><span>E-Book - ${props.Ebook} (BUY FROM AMAZON)</span></a></>}
    {props.Hardcover === ""?<></>:<>    <a href={`https://www.amazon.com/gp/product/${props.link}`}><span>Hardcover - ${props.Hardcover}</span></a></>}

    </div>
    </div>
    <div className='buynowdetail_right'>
      <img src={props.picture} />
    <Player
      
      src={props.trailer}
      aspectRatio="auto"

      />

    </div>
    </div>
  )
}

export default BuyNowDetail