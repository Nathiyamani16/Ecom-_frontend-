import React from "react";
import "./OnePlusC.css"
import { Link } from "react-router-dom";
import OnePlus1 from "../Img/OnePlus1.jpg"
import OnePlus2 from "../Img/OnePlus2.jpg"
import OnePlus3 from "../Img/OnePlus3.jpg"
import OnePlus4 from "../Img/OnePlus4.jpg"
import OnePlus5 from "../Img/OnePlus5.jpg"
import OnePlus6 from "../Img/OnePlus6.jpg"
const OnePlus = () => {
    return(
        <div>   
      <Link to="/product/65a65e53920b9ae7fbf0f581" onClick={() => window.scrollTo(0, 0)} >
      <div className="One">
        <br />
        <img src={OnePlus1} alt="SampleImage" className="OneImage" />
        <h5 className="onePlushead">One Plus Nord CE2 Lite</h5>
      </div>
      </Link>

      <Link to="/product/65a65e1d920b9ae7fbf0f57f" onClick={() => window.scrollTo(0, 0)} >
      <div className="One">
        <br />
        <img src={OnePlus2} alt="SampleImage" className="OneImage" />
        <h5 className="onePlushead">One Plus Nord 2T</h5>
      </div>
      </Link>

      <Link to="/product/65a65e53920b9ae7fbf0f581" onClick={() => window.scrollTo(0, 0)} >
      <div className="One">
        <br />
        <img src={OnePlus3} alt="SampleImage" className="OneImage" />
        <h5 className="onePlushead">One Plus Nord CE 2</h5>
      </div>
      </Link>


      <Link to="/product/65a65e1d920b9ae7fbf0f57f" onClick={() => window.scrollTo(0, 0)} >
      <div className="One">
        <br />
        <img src={OnePlus4} alt="SampleImage" className="OneImage" />
        <h5 className="onePlushead">One Plus Nord 2T 5G</h5>
      </div>
      </Link>

      <Link to="/product/65a65e7d920b9ae7fbf0f583" onClick={() => window.scrollTo(0, 0)} >
      <div className="One">
        <br />
        <img src={OnePlus5} alt="SampleImage" className="OneImage" />
        <h5 className="onePlushead">One Plus Nord 3 5G</h5>
      </div>   
      </Link>


      <Link to="/product/65a66602cd33d9d9525d8a33" onClick={() => window.scrollTo(0, 0)} >
      <div className="One">
        <br />
        <img src={OnePlus6} alt="SampleImage" className="OneImage" />
        <h5 className="onePlushead">One Plus Nord 11R</h5>
      </div>
      </Link>
      <br />
      <br />
      </div>
    )
}

export default OnePlus