import React from "react";
import Footer from "../../Components/Footer/Footer";
import Gallery from "../../Components/Gallery/Gallery";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./GalleyPage.css";
function GalleyPage() {
  return (
    <>
    <PageHeader name="Gallery"
        picture={require(`../../assets/images/contact-dog.png`)}/>
      <div className="GalleyPage">
        <Gallery pagename="gallery"/>
      </div>
      <Footer />
    </>
  );
}

export default GalleyPage;
