import React,{useState} from "react";
import "./Book.css";

import visa from "../../assets/images/visa.png";
import masterunion from "../../assets/images/masterunion.png";
import paypal from "../../assets/images/paypal.png";
import visa2 from "../../assets/images/visa2.png";
import masterunion2 from "../../assets/images/masterunion2.png";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Book(props) {

  const booksdata = [
    {
      id:1,
      head: "Spot On!",
      desc: "Over the past few years, Lynn has taken many dogs in her rescue. Going through a lot of struggles to find the best-suited home for them, Lynn begins to wonder how the story starts — how can she save all of them. Even after giving homes to a lot of dogs, the stream of suffering dogs appears endless. Seized by the need to act, Lynn join hand with her best friend to import distressed...",
      img: "book-card-img-1",
      trailer:"SpotOnMysteryAtTheDogRescue-Trailer",
      link:"",
      paperback:"",
      hardcover:"",
      ebook:"",
    },
    {
      id:2,
      head: "Spot On!",
      desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
      img: "book-card-img-1-revised",
      trailer:"SpotOnCanineBabies-Trailer",
      link:"B096X6HH4B/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1",
      paperback:"8.99",
      hardcover:"",
      ebook:"3.99",
    },
    {
      id:3,
      head: "Spot On!",
      desc: "In this second book in the Spot On series, join Lynn and her rescue dogs for another adventure. Animals go through some terrible things in order to survive on their own, which is why Lynn’s rescues are so beloved. This time, they go to Mexico, where a mystery causes chaos at the dog rescue. A scandal evolves. Meanwhile, Lynn is on vacation. Their investigation takes them to New York City’s Chinatown where they must stand...",
      img: "book-card-img-2",
      trailer:"SpotOnMysteryAtTheDogRescue-Trailer",
      link:"B096TSVMX7/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i2",
      paperback:"11.99",
      hardcover:"28.95",
      ebook:"3.99",
    },
    {   
        id:4,
        head: "Canine Babies",
        desc: "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try. As Lynn and Maryanne carry out their own investigations, the case becomes increasingly personal. Long-submerged secrets surface as Lynn teams up with the cops to solve the puzzle before a cunning killer claims another victim...",
        img: "book-card-img-3",
        trailer:"SpotOnCanineBabies-Trailer",
        link:"B096YJ5FZ4/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4",
        paperback:"10.50",
        hardcover:"",
        ebook:"9.99",
      },
      {
        id:5,
        head: "Spot-on: Canines on a Cruise",
        desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs...",
        img: "book-card-img-4",
        trailer:"SpotOnMysteryAtTheDogRescue-Trailer",
        link:"B098W57CG1/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i3",
        paperback:"9.50",
        hardcover:"",
        ebook:"5.55",
      },
      {
        id:6,
        head: "SPOT- ON: NEW BEGINNINGS",
        desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin...",
        img: "book-card-img-5",
        trailer:"SpotOnCanineBabies-Trailer",
        link:"B09H3N787N/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i5",
        paperback:"11.99",
        hardcover:"",
        ebook:"0.00",
      },
  ];




  const illustrationbooks = [
    {
      id:1,
      head: "Spot On: Chaos At The Dog Rescue",
      desc: "Over the past few years, Lynn has taken many dogs in her rescue. Going through a lot of struggles to find the best-suited home for them, Lynn begins to wonder how the story starts — how can she save all of them. Even after giving homes to a lot of dogs, the stream of suffering dogs appears endless. Seized by the need to act, Lynn join hand with her best friend to import distressed...",
      img: "illbook1",
      trailer:"SpotOnMysteryAtTheDogRescue-Trailer",
      link:"",
      paperback:"",
      hardcover:"",
      ebook:"",

      
      
    },
    {
      id:2,
      head: "Spot On: Mystery At The Dog Rescue",
      desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
      img: "illbook2",
      trailer:"SpotOnCanineBabies-Trailer",
      link:"",
      paperback:"",
      hardcover:"",
      ebook:"",

      
      
    },
    {
      id:3,
      head: "Spot On: Canine Babies At The Dog Rescue",
      desc: "In this second book in the Spot On series, join Lynn and her rescue dogs for another adventure. Animals go through some terrible things in order to survive on their own, which is why Lynn’s rescues are so beloved. This time, they go to Mexico, where a mystery causes chaos at the dog rescue. A scandal evolves. Meanwhile, Lynn is on vacation. Their investigation takes them to New York City’s Chinatown where they must stand...",
      img: "illbook3",
      trailer:"SpotOnMysteryAtTheDogRescue-Trailer",
      link:"",
      paperback:"",
      hardcover:"",
      ebook:"",

      
      
    },
  ];

  const booksdataarr = booksdata.map((Cvalue,index) => 
    <div className={index % 2 === 0? "book_card":"book_card_reverse"}>
    <div className='book_card_img'>
        <img src={require(`../../assets/images/${Cvalue.img}.png`)} />
    </div>
    <div className={index % 2 === 0? "book_card_text":"book_card_text_reverse"}>
        <h2>{Cvalue.head}</h2>
        <p>{Cvalue.desc}</p>
        {console.log(Cvalue)}
       <Link to="/buynow-detail" state={[{id:Cvalue.id,head:Cvalue.head,picture:Cvalue.img,trailer:Cvalue.trailer,link:Cvalue.link,paperback:Cvalue.paperback,ebook:Cvalue.ebook,hardcover:Cvalue.hardcover}]}><button className='btn'>Read More</button></Link>
        <div className='book_card_text_payment'>
            <img src={visa} />
            <img src={paypal} />
            <img src={masterunion} />
            <img src={visa2} />
            <img src={masterunion2} />
        </div>
    </div>
</div>
    ) 
const illustrationdataarr = illustrationbooks.map((cvalue,index) => 
<div className={index % 2 === 0? "book_card":"book_card_reverse"}>
<div className='book_card_img'>
    <img src={require(`../../assets/images/${cvalue.img}.png`)} />
</div>
<div className={index % 2 === 0? "book_card_text":"book_card_text_reverse"}>
    <h2>{cvalue.head}</h2>
    <p>{cvalue.desc}</p>
    {console.log(cvalue)}
   <Link to="/buynow-detail" state={[{id:cvalue.id,head:cvalue.head,picture:cvalue.img,trailer:cvalue.trailer,link:cvalue.link,paperback:cvalue.paperback,ebook:cvalue.ebook,hardcover:cvalue.hardcover}]}><button className='btn'>Read More</button></Link>
    <div className='book_card_text_payment'>
        <img src={visa} />
        <img src={paypal} />
        <img src={masterunion} />
        <img src={visa2} />
        <img src={masterunion2} />
    </div>
</div>
</div>

)

     return (
    <div className={props.pagename === "bookpage"?"Book_bookpage":"Book"}>
      <div className={props.pagename === "bookpage"?"displaynone":"book_top"}>
        <h1>TO TAKE A GLIMPSE OF THE BOOK</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="book_bottom">
        {props.id === 1 ?booksdataarr:illustrationdataarr}
      <Link to="/buynow">  <button className={props.pagename === "bookpage"?"displaynone":"btn-black"}>View More</button></Link>
      </div>
    </div>
  );
}

export default Book;
