import React from "react";
import BuyNowDetail from "../../Components/BuyNowPage/BuyNowDetail";
import Footer from "../../Components/Footer/Footer";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./BuyNowDetailPage.css";
import { useLocation } from "react-router-dom";

function BuyNowDetailPage() {
  const a = useLocation();
  let componentid = a.state[0].id;
  let componenthead = a.state[0].head;
  let componentpicture = a.state[0].picture;
  let componenttrailer = a.state[0].trailer;
  let componentlink = a.state[0].link; 
  let componentpaperback = a.state[0].paperback; 
  let componenthardcover = a.state[0].hardcover; 
  let componentebook = a.state[0].ebook; 
  console.log("State")
  console.log(a.state[0])
  return (
    <>
      <PageHeader
        name="Buy Now Detail"
        picture={require(`../../assets/images/contact-dog.png`)}
      />
      <div className="BuyNowDetailPage">{showData(componentid)}</div>
      <Footer />
    </>
  );

  function showData(num) {
    const bookOneDesc = (
      <p>
        Over the past few years, Lynn has taken many dogs in her rescue. Going
        through a lot of struggles to find the best-suited home for them, Lynn
        begins to wonder how the story starts — how can she save all of them.
        Even after giving homes to a lot of dogs, the stream of suffering dogs
        appears endless. Seized by the need to act, Lynn join hand with her best
        friend to import distressed dogs from China and Turkey to provide them a
        suitable shelter for them. What she discovers further breaks her heart
        and compels her to shares her story in the hope of changing this world.
        <br />
        <br />
        In this book, Lynn shares stories of the amazing dogs that she has
        rescued and brought to loving families after dealing with the most
        notorious dog traffickers in the USA. This book offers invaluable
        guidance and wisdom for anyone who feels for these innocent fur babies.
        It is a heartwarming story of the man-and-dog team behind the rescues of
        the helpless dogs. The work was not easy at all. But through it all,
        Lynn shares an enduring and affectionate bond with other characters in
        the story, which is more than a working relationship. Lynn becomes
        Sherlock for the missing animals inside Austin.
        <br />
        <br />
        This book is a soulful tribute to abandoned dogs of all breeds and will
        appeal to every animal lover around the globe. The author has tried to
        recreate events, locales, and conversations using her creative flair.
        It’s about finding your own way to light a candle instead of sitting
        inside the darkness. We have rescued a number of dogs together, and we
        hope to change the landscape of rescue with this book forever.
      </p>
    );

    const bookOneRevisedDesc = (
      <p>
        When Lynn wakes up to find some of her rescue dogs missing, she is
        terrified. Who would steal her dogs, and for what purpose? The mystery
        continues when a man is found shot to death at Lynn’s shelter.
        <br />
        <br />
        It soon becomes apparent her pups were stolen to send to China to take
        part in dogfights. Lynn and her friends cannot let this happen so rush
        to save their precious pets. Their investigation takes them to New York
        City’s Chinatown where they must stand up to the Chinese mob.
        <br />
        <br />
        Lynn will not back down. She will find her rescue dogs and maybe even
        solve a murder in this adventure story about one woman’s love for fur
        babies and the lengths she will go to save them.
      </p>
    );
    const bookTwoDesc = (
      <p>
        In this second book in the Spot On series, join Lynn and her rescue dogs
        for another adventure. Animals go through some terrible things in order
        to survive on their own, which is why Lynn’s rescues are so beloved.
        <br />
        <br />
        This time, they go to Mexico, where a mystery causes chaos at the dog
        rescue. A scandal evolves. Meanwhile, Lynn is on vacation, hoping to
        swim and water ski. Instead, she is confronted with unexpected intrigue.
        <br />
        <br />
        Lynn is once again on the case as she rescues some skinny and dehydrated
        dogs from Mexico. She plans to save them, and she won’t be stopped in
        her heartfelt mission.
      </p>
    );
    const bookThreeDesc = (
      <p>
        To Lynn, handling some of the worst scenarios is not an unusual
        condition. Its her life’s work. But when a kidnapping and a murder
        happen, her focus all of a sudden changes. Something has to be done and
        Lynn is fearless enough to try.
        <br />
        <br />
        As Lynn and Maryanne carry out their own investigations, the case
        becomes increasingly personal. Long-submerged secrets surface as Lynn
        teams up with the cops to solve the puzzle before a cunning killer
        claims another victim.
      </p>
    );
    const bookFourDesc = (
      <p>
        They say that a dog is among the most loyal animals on earth and a man’s
        best friend too! Well, it wouldn’t hurt to have one or maybe two fur
        babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel
        written by Carolynn Tucciarone which portrays the amazing life of a
        loving couple that owns a dog rescue in Austin, Texas. From rescuing
        bull terriers from a ditch to nurturing all injured and abandoned dogs,
        the couple takes on another challenge of rescuing abandoned fur babies
        in South Korea. They embark upon their journey and narrate the
        experience of their lifetime word by word. From China to Mexico and
        Seoul in South Korea, they then had a successful canines on a cruise!
        <br />
        Step inside their shoes and take part in their adventure-filled journey
        in “Spot-on: Canines on a Cruise!”
      </p>
    );
    const bookFiveDesc = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    );

    if (num === 1) {
      return (
        <BuyNowDetail
          title={componenthead}
          picture={require(`../../assets/images/${componentpicture}.png`)}
          desc={bookOneDesc}
          trailer={require(`../../assets/videos/${componenttrailer}.mp4`)}
          paperback={componentpaperback}
          Ebook={componentebook}
          Hardcover={componenthardcover}
          link = {componentlink}
        />
      );
    } else if (num === 2) {
      return (
        <BuyNowDetail
          title={componenthead}
          picture={require(`../../assets/images/${componentpicture}.png`)}
          desc={bookOneRevisedDesc}
          trailer={require(`../../assets/videos/${componenttrailer}.mp4`)}
          paperback={componentpaperback}
          Ebook={componentebook}
          Hardcover={componenthardcover}
          link = {componentlink}
        />
      );
    } else if (num === 3) {
      return (
        <BuyNowDetail
          title={componenthead}
          picture={require(`../../assets/images/${componentpicture}.png`)}
          desc={bookTwoDesc}
          trailer={require(`../../assets/videos/${componenttrailer}.mp4`)}
          paperback={componentpaperback}
          Ebook={componentebook}
          Hardcover={componenthardcover}
          link = {componentlink}
        />
      );
    } else if (num === 4) {
      return (
        <BuyNowDetail
          title={componenthead}
          picture={require(`../../assets/images/${componentpicture}.png`)}
          desc={bookThreeDesc}
          trailer={require(`../../assets/videos/${componenttrailer}.mp4`)}
          paperback={componentpaperback}
          Ebook={componentebook}
          Hardcover={componenthardcover}
          link = {componentlink}
        />
      );
    } else if (num === 5) {
      return (
        <BuyNowDetail
          title={componenthead}
          picture={require(`../../assets/images/${componentpicture}.png`)}
          desc={bookFourDesc}
          trailer={require(`../../assets/videos/${componenttrailer}.mp4`)}
          paperback={componentpaperback}
          Ebook={componentebook}
          Hardcover={componenthardcover}
          link = {componentlink}
        />
      );
    } else if (num === 6) {
      return (
        <BuyNowDetail
          title={componenthead}
          picture={require(`../../assets/images/${componentpicture}.png`)}
          desc={bookFiveDesc}
          trailer={require(`../../assets/videos/${componenttrailer}.mp4`)}
          paperback={componentpaperback}
          Ebook={componentebook}
          Hardcover={componenthardcover}
          link = {componentlink}
        />
      );
    } else {
      return <p>Nothing!!!</p>;
    }
  }
}

export default BuyNowDetailPage;
