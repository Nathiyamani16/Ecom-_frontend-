import React from "react";
import SampleImage5 from "../Img/Sample5.png";
import SampleImage6 from "../Img/Sample6.png";
import MensFashion from "../Img/Look.jpg"
import Indian from "../Img/Indian_Brands.jpg"
import "./Card.css";
import { Link } from "react-router-dom";


const SampleTwo = () =>{
    return(
        <div>
        <Link to="/category/Dress"  onClick={() => window.scrollTo(0, 0)} >
        <div className="Card">
        <br />
        <h3 className="HeadingCard">New Look for New Season</h3>
        <img src={MensFashion} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
          <span>See all Deals</span>
        </div>
      </div>
      </Link>

      <Link to="/category/History"  onClick={() => window.scrollTo(0, 0)} >
      <div className="Card">
        <br />
        <h3 className="HeadingCard">Deals by Recent History</h3>
        <img src={SampleImage5} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
        <span>See all Deals</span>
        </div>
      </div>
      </Link>

      <Link to="/category/WFH"  onClick={() => window.scrollTo(0, 0)} >
      <div className="Card">
        <br />
        <h3 className="HeadingCard">Work from Home Essentials</h3>
        <img src={SampleImage6} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
        <span>See all Deals</span>
        </div>
      </div>
      </Link>

      <Link to="/category/indian-brands"  onClick={() => window.scrollTo(0, 0)} >
      <div className="Card">
        <br />
        <h3 className="HeadingCard">Innovations for Indian Brands</h3>
        <img src={Indian} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
        <span>See all Deals</span>
        </div>
      </div>
</Link>
      
        </div>
    )
}

export default SampleTwo