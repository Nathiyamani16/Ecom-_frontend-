import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SampleC.css";
import SampleImage1 from "../Img/SampleOne.jpg";
import SampleImage2 from "../Img/SampleTwo.jpg";
import SampleImage3 from "../Img/ImageThree.jpg";
import SampleImage4 from "../Img/ImageFour.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Bazzar from "../Img/Value_Barzer.jpg";
import SmartGad from "../Img/Smart_Gadgets.jpg";
import Fashion from "../Img/Fashion.jpg";
import HomeEss from "../Img/Home_Essentials.jpg";
import "./Card.css";
import SampleTwo from "./SampleTwo.js";
import OnePlus from "../Img/OnePlus.jpg";
import OnePlusCard from "./OnePlus.js";
import { useNavigate } from "react-router-dom";


const Sample = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const scrollLeft = () => {
    setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : 3));
  };

  const scrollRight = () => {
    setCurrentImage((prevImage) => (prevImage < 3 ? prevImage + 1 : 0));
  };

  const transformValue = `translateX(${-currentImage * 100}%)`;

  const handleimage = () => {
    navigate('/mobile')
    window.scrollTo(0, 0);
  }
  return (
    <div className="SamplePage">
      <div className="SampleImagesContainer" style={{ transform: transformValue }} ref={containerRef}>
        <img src={SampleImage1} alt="SampleImageOne" className="SampleImages" onClick={()=> handleimage()}/>
        <img src={SampleImage2} alt="SampleImageTwo" className="SampleImages" />
        <img src={SampleImage3} alt="SampleImageThree" className="SampleImages" />
        <img src={SampleImage4} alt="SampleImageFour" className="SampleImages" />
      </div>

      <div className="NavigationArrows LeftArrow" onClick={scrollLeft}>
        {<FaArrowLeft />}
      </div>
      <div className="NavigationArrows RightArrow" onClick={scrollRight}>
        {<FaArrowRight />}
      </div>

      <br />
      <br />

      <Link to="/category/makeup" onClick={() => window.scrollTo(0, 0)} >
        <div className="Card">
          <br />
          <h3 className="HeadingCard">Makeup Products</h3>
          <img src={Fashion} alt="SampleImage" className="CardImage" />
          <div className="CardContent">
            <span>See all deals</span>
          </div>
        </div>
      </Link>

      <Link to="/category/home-essentials"  onClick={() => window.scrollTo(0, 0)} >
        <div className="Card">
          <br />
          <h3 className="HeadingCard">Home Essentials</h3>
          <img src={HomeEss} alt="SampleImage" className="CardImage" />
          <div className="CardContent">
            <span>See all deals</span>
          </div>
        </div>
      </Link>

      <Link to="/category/smart-gadgets" onClick={() => window.scrollTo(0, 0)} >
        <div className="Card">
          <br />
          <h3 className="HeadingCard">Smart Tech for Savvy Users</h3>
          <img src={SmartGad} alt="SampleImage" className="CardImage" />
          <div className="CardContent">
            <span>See all deals</span>
          </div>
        </div>
      </Link>

      <Link to="/category/value-bazaar" onClick={() => window.scrollTo(0, 0)} >
        <div className="Card">
          <br />
          <h3 className="HeadingCard">Value Bazaar</h3>
          <img src={Bazzar} alt="SampleImage" className="CardImage" />
          <div className="CardContent">
            <span>See all deals</span>
          </div>
        </div>
      </Link>

      <br />
      <br />
      <SampleTwo />
      <br />
      <br />
      <Link to="/category/oneplus" onClick={() => window.scrollTo(0, 0)}>
        <img src={OnePlus} alt="One Plus" className="OnePlusImage" />
      </Link>
      <br />
      <OnePlusCard />
    </div>
  );
};

export default Sample;
