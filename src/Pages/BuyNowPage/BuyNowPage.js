import React, { useState } from "react";
import Book from "../../Components/Book/Book";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./BuyNowPage.css";
function BuyNowPage() {
  const [count, setcount] = useState(1)
  const buynowtabslinkdata = [
    {
      id:1,
      name: "Story Books",
    },
    {
      id:2,
      name: "Illustration Books",
    },
  ];

  const buynowtabslinkdataarr = buynowtabslinkdata.map(cvalue => 
    <>
      <button className="btn" onClick={() => {
        let id = cvalue.id;
        setcount(id);
      }}>{cvalue.name}</button>

    </>
  );

  return (
    <>
      <PageHeader
        name="Buy Now"
        picture={require(`../../assets/images/contact-dog.png`)}
      />
      <div className="BuyNowPage">
        <h1>Find The Greatest Books On Dogs Here</h1>
        <br />
        <p>
          The love for dogs in humans is visible through the uncountable dog
          storybooks or other dog-related topics to help dog lovers and keepers.
          From entertaining kids to both adults, there is a sea of famous dog
          books on training, dog types, or enthralling stories.
          <br />
          <br />
          I, Carolynn Tucciarone, have made use of my affection for dogs and
          travel experiences to create an incredible suspense story that you
          will love. With Spot On being one of the books about a dog, you will
          also find my other dog books here that will soon be launched.
          <br />
          <br />
          Kids or adults, both will enjoy this full of suspense story that is a
          bit different from the usually published dog training books.
          <br />
          <br />
          It is a treat for readers and dog lovers who will find the dog rescue
          story enthralling. I, myself, am into dogs and books for dogs. So
          writing this book offered me an opportunity to put my love and
          knowledge into words and entertain all of you.
          <br />
          <br />
          You will find the best dog books of all time here as my fur babies
          grow to motivate me to produce more classic dog books. So while you
          read my first book, my canine babies and I will be back with more!
        </p>

        <div className="buynow_tabs_links">{buynowtabslinkdataarr}</div>

        <div className="buynow_tabs_content">
            {BooksComponentRendering(count)}
        </div>
      </div>
      <Footer />
    </>
  );
}

function BooksComponentRendering(num){
if (num === 1){
  return <Book pagename="bookpage" id={num}/>
}
else if (num === 2) {
  return <Book pagename="bookpage" id={num}/>
}
}


export default BuyNowPage;
