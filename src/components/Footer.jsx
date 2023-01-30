import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--items">
            <a href="https://www.linkedin.com/in/christopher-conover-53440074/" target="_blank">
            <img src="../src/assets/linkedin.png" alt="Linked in" width="25px" height="25px" className="logo"/>
            </a>
            <a href="https://twitter.com/lullabynoir" target="_blank">
            <img src="../src/assets/twitter.png" alt="Twitter" width="25px" height="25px" className="logo"/>
            </a>
            <a href="https://www.facebook.com/lullabynoir" target="_blank">
            <img src="../src/assets/facebook.png" alt="Face book" width="25px" height="25px" className="logo"/>
            </a>
            <a href="https://github.com/chrisconover83" target="_blank">
            <img src="../src/assets/github.png" alt="Git Hub" width="25px" height="25px" className="logo"/>
            </a>
            </div>
        </div>
    );
}

export default Footer