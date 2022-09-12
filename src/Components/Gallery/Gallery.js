import React from "react";
import "./Gallery.css";
import dog1 from "../../assets/images/gallery-dog-1.png"
import dog2 from "../../assets/images/gallery-dog2.png"
import gallery1 from "../../assets/images/gallery-1.png";
import gallery2 from "../../assets/images/gallery-2.png";
import gallery3 from "../../assets/images/gallery-3.png";
import gallery4 from "../../assets/images/gallery-4.png";
import gallery5 from "../../assets/images/gallery-5.png";
import gallery6 from "../../assets/images/gallery-6.png";
import {Link} from "react-router-dom";

function Gallery(props) {
  return (
    <div className={props.pagename === "gallery"?"Gallery_gallerypage":"Gallery"}>
        <div className={props.pagename === "gallery"?"displaynone":"dog_img_1"}>
        <img src={dog1} />
        </div>
      <div className="gallery_head">
        
        <h1>Our Gallery</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="gallery_bottom">
        <div class={props.pagename === "gallery"?"displaynone":"grid"}>
          <div class="grid__item">
            <img src={gallery1} />
          </div>
          <div class="grid__item">
            <img src={gallery2} />
          </div>
          <div class="grid__item">
            <img src={gallery3} />
          </div>
          <div class="grid__item">
            <img src={gallery4} />
          </div>
          <div class="grid__item">
            <img src={gallery5} />
          </div>
          <div class="grid__item">
            <img src={gallery6} />
          </div>
        <Link to="/gallery">  <button className={props.pagename === "gallery"?"displaynone":"btn"} style={{margin:"30px"}}>Explore More</button></Link>
          
        </div>
        <div class={props.pagename === "gallery"?"grid":"displaynone"}>
          <div class="grid__item">
            <img src={gallery1} />
          </div>
          <div class="grid__item">
            <img src={gallery2} />
          </div>
          <div class="grid__item">
            <img src={gallery3} />
          </div>
          <div class="grid__item">
            <img src={gallery4} />
          </div>
          <div class="grid__item">
            <img src={gallery5} />
          </div>
          <div class="grid__item">
            <img src={gallery6} />
          </div>            
          <div class="grid__item">
            <img src={gallery6} />
          </div> 
          <div class="grid__item">
            <img src={gallery5} />
          </div>
          <div class="grid__item">
            <img src={gallery6} />
          </div>            
          <div class="grid__item">
            <img src={gallery6} />
          </div>    <div class="grid__item">
            <img src={gallery5} />
          </div>
          <div class="grid__item">
            <img src={gallery6} />
          </div>            
          <div class="grid__item">
            <img src={gallery6} />
          </div>    <div class="grid__item">
            <img src={gallery5} />
          </div>
          <div class="grid__item">
            <img src={gallery6} />
          </div>            
          <div class="grid__item">
            <img src={gallery6} />
          </div>    <div class="grid__item">
            <img src={gallery5} />
          </div>
          <div class="grid__item">
            <img src={gallery6} />
          </div>            
          <div class="grid__item">
            <img src={gallery6} />
          </div>
        </div>
        
      </div>
      <div className={props.pagename === "gallery"?"displaynone":"dog_img_2"}>
        <img src={dog2} />
        </div>
    </div>
  );
}

export default Gallery;
