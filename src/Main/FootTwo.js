import React from "react";
import Logo from "../Img/Re-Mastered.png"
import './FootTwo.css'
const FootTwo = () => {
    return(
        <div>
            <div className="FootTwoDiv">
            <img src={Logo} alt="Amazon Logo" className="FootLogo"/>   
            </div>
            <div className="FootTwoDivTwo">
            <a href="/Australia" className="Aus">Australia</a>
            <a href="/Brazil" className="Aus">Brazil</a>
            <a href="/Canada" className="Aus">Canada</a>
            <a href="/China" className="Aus">China</a>
            <a href="/France" className="Aus">France</a>
            <a href="/Germany" className="Aus">Germany</a>
            <a href="/Italy" className="Aus">Italy</a>
            <a href="/India" className="Aus">India</a>
            <a href="/Japan" className="Aus">Japan</a>
            <a href="/Mexico" className="Aus">Mexico</a>
            <a href="/Poland" className="Aus">Poland</a>
            <a href="/Singapore" className="Aus">Singapore</a>
            <a href="/Spain" className="Aus">Spain</a>
            <a href="/Trukey" className="Aus">Turkey</a>
            <br />
            <br />
            <br />
            </div>
        </div>
        
    )
}

export default FootTwo