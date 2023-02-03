import React from "react";
import ProfilePic from "/assets/profile.png";

const Info = () => {
    return (
        <div>
            <img src={ProfilePic} alt="profile picture" width="317px" height="317px" className="profile"/>
            <div className="container">
                <h1 className="name">Chris Conover</h1>
                <h4 className="title">Full-stack Developer</h4>
                <h6 className="contact"><a href="https://chrisconover83.github.io/portfolioWebsite/" target="_blank">https://chrisconover83.github.io/portfolioWebsite/</a></h6>
                <a href="mailto:chrisconover83@gmail.com">
                <button className="btn">
                <img src="../assets/email.png" alt="email" width="17px" height="17px" className="email"/>Email
                </button>
                </a>
            </div>
        </div>
    );
}

export default Info