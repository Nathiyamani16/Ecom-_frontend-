import React from "react";
import "./MainFoot.css"
const Footer = () => {
    return(
        <div className="MainFoot">
        <div className="HorizontalList">
        <div>
          <h3>AbeBooks</h3>
        <ul>
            <li>Books</li>
            <li>Art</li>
            <li>Collectibles</li>
        </ul>
        </div>
        <div>
          <h3>Amazon Web Services</h3>
          <ul>
            <li>Scalable</li>
            <li>Cloud Computing</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h3>Audible</h3>
          <ul>
          <li>Download</li>
          <li>Audio</li>
          <li>Books</li>
          </ul>
        </div>
        <div>
          <h3>IMBd</h3>
          <ul>
          <li>Movies</li>
          <li>TV</li>
          <li>Celebration</li>
          </ul>
        </div>
      </div>
      <br />
            <div className="FootLinks">
            <a href="/FooterOne" className="Cond">Conditions of Use & Sales</a>
            <a href="/FooterTwo" className="Pri">Privacy Notice</a>
            <a href="/uploadImage" className="Int">Interest-Based Ads</a>
            </div>
            <h2 className="FooterCopy">© 1996-2023, Amazon.com, Inc. or its affiliates</h2>
            <br />
            <br />
        </div>
    )
}

export default Footer