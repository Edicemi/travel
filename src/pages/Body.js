// importing components
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// importing components

// importing styles
import "../styles/body.css";
// importing styles

// importing images
import Vector1 from "../images/Vector1.png";
import image909 from "../images/image909.png";
import Maskgroup2 from "../images/Maskgroup2.png";
import airbnb from "../images/airbnb.png";
import turkish from "../images/turkish.png";
import swiss from "../images/swiss.png";
import flag from "../images/flag.png";
import plane from "../images/plane.png";
import hand from "../images/hand.png";
import people from "../images/people.png";
import illustration from "../images/illustration.png";
import Group7 from "../images/Group7.png";
import Group11 from "../images/Group11.png";
import Group12 from "../images/Group12.png";
import illustration2 from "../images/illustration2.png";
// import Backgroundelement from "../images/Backgroundelement.png";
// importing images

const Body = () => {
  return (
    <>
      <div className="header">
        <div className="">
          <div className="nav-a">
            <Navbar />
          </div>

          <div className="no-a">
            <img className="vector" src={Vector1} alt="Logo" />
            <br />
            <span className="no-matter">
              No matter where you’re going to, we’ll take you there
            </span>
          </div>
          <div className="blur-a0">
            <div className="blur-a">
              <div className="blur-a1">
                <span className="blur-w">Where To?</span>
                <span className="blur-w">Travel Type</span>
                <span className="blur-w">Duration</span>
                <button className="blur-b">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner">
        <div className="container">
          <div className="partner1">
            <img className="partner-img" src={image909} alt="Logo" />
            <img className="partner-img" src={Maskgroup2} alt="Logo" />
            <img className="partner-img" src={airbnb} alt="Logo" />
            <img className="partner-img" src={turkish} alt="Logo" />
            <img className="partner-img" src={swiss} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="container cat-a">
        <p className="category">CATEGORY</p>
        <p className="offer">We Offer Best Services</p>
      </div>
      <div className="container">
        <div className="guided">
          <div className="guided-p">
            <img className="offer-img" src={flag} alt="Logo" />
            <br />
            <span className="guided-w">Guided Tours</span>
            <br />
            <span className="guided-w1">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </span>
          </div>
          <div className="guided-p">
            <img className="offer-img" src={plane} alt="Logo" />
            <br />
            <span className="guided-w">Best Flights Options</span>
            <br />
            <span className="guided-w1">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </span>
          </div>
          <div className="guided-p">
            <img className="offer-img" src={hand} alt="Logo" />
            <br />
            <span className="guided-w">Religious Tours</span>
            <br />
            <span className="guided-w1">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </span>
          </div>
          <div className="guided-p">
            <img className="offer-img" src={people} alt="Logo" />
            <br />
            <span className="guided-w">Medical insurance</span>
            <br />
            <span className="guided-w1">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </span>
          </div>
        </div>
      </div>
      <div className="container honeymoon">
        <div className="honey1">
          <div className="honey2">
            <img className="honey-img" src={illustration} alt="Logo" />
            {/* <img className="honey-img" src={Backgroundelement} alt="Logo" /> */}
          </div>
          <div className="honey3">
            <span className="category">HONEYMOON SPECIALS</span>
            <br />
            <span className="offer">Our Romantic Tropical Destinations</span>
            <br />
            <span className="guided-w1">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </span>
            <br />
            <button className="honey-b">View Packages</button>
          </div>
        </div>
      </div>
      <div className="container favourite">
        <div className="">
          <span className="category">Fast & Easy</span>
          <br />
          <span className="offer">Get Your Favourite Resort Bookings</span>
          <br />
          <div className="favourite-a">
            <div className="">
              <img className="" src={Group7} alt="Logo" />
            </div>
            <div className="fav-oro">
              <span className="fav-oro1">Choose Destination</span>
              <br />
              <span className="fav-oro2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </span>
            </div>
          </div>
          <div className="favourite-a">
            <div className="">
              <img className="" src={Group11} alt="Logo" />
            </div>
            <div className="fav-oro">
              <span className="fav-oro1">Check Availability</span>
              <br />
              <span className="fav-oro2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </span>
            </div>
          </div>
          <div className="favourite-a">
            <div className="">
              <img className="" src={Group12} alt="Logo" />
            </div>
            <div className="fav-oro">
              <span className="fav-oro1">Let's Go</span>
              <br />
              <span className="fav-oro2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <img className="fav-img" src={illustration2} alt="plane" />
        </div>
      </div>
      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
};
export default Body;
