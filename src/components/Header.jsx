import React from "react";
import logo from "../assets/hoobank.png";
import myImage from "../assets/my-image.png";
import myCard1 from "../assets/card1.png";
import myCard2 from "../assets/card2.png";
import myCard3 from "../assets/card3.png";
import myBall1 from "../assets/ball.png";
import myBall2 from "../assets/ball1.png";
import myBall3 from "../assets/ball2.png";
import getStarted from "../assets/get-started.png";

export const Header = () => {
  return (
    <header className="hero-section">
      <nav className="navbar">
        <div>
          <img className="bank-logo" src={logo} />
        </div>
        <div>
          <ul className="navbar-list">
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Solution</li>
          </ul>
        </div>
      </nav>
      <div className="payment-wrapper">
        <div className="payment-wrapper_desciption">
          <p className="discount">20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
          <h1 className="payment_method">
            The Next <br /> Generation <br /> Payment Method.
          </h1>
          <div className="get">
            <img className="get-img" src={getStarted} />
          </div>
          <p className="payment_method_description">
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs. <br /> We examine annual
            percentage rates, annual fees.
          </p>
        </div>
        <div className="robot-hand">
          <div className="card-stack">
            <div className="ball1">
              <img src={myBall1} />
            </div>
            <div className="card-group">
              <div className="card1">
                <img className="card-three" src={myCard3} />
              </div>
              <div className="card2">
                <img className="card-two" src={myCard2} />
              </div>
              <div className="card3">
                <img className="card-one" src={myCard1} />
              </div>
            </div>
            <div className="ball2">
              <img src={myBall2} />
            </div>
            <div className="ball3">
              <img src={myBall3} />
            </div>
          </div>
          <div className="robot-hand_image">
            <img className="robot-hand-img" src={myImage} />
          </div>
        </div>
      </div>
    </header>
  );
};
