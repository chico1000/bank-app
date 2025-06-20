import myStar from "../assets/star.png";
import mySecured from "../assets/secured.png";
import myTransfer from "../assets/transfer.png";

import myPaypal from "../assets/paypal.png";
import myTransaction from "../assets/last-transaction.png";
import myApple from "../assets/apple.png";
import myGoogle from "../assets/google-play.png";
import myPay from "../assets/pay-method.png";
import myEllipse1 from "../assets/ellipse-big.png";
import myEllipse2 from "../assets/ellipse-medium.png";
import myEllipse3 from "../assets/ellipse-small.png";
import myCredit from "../assets/credit-cards.png";
import myOnline from "../assets/online-analysis.png";
import myQuote from "../assets/quote.png";
import myKenn from "../assets/kenn.png";
import myHerman from "../assets/herman.png";
import mySteve from "../assets/steve.png";
import myAirbnb from "../assets/airbnb.png";

export const MainSection = () => {
  return (
    <main className="body">
      <div className="mid">
        <div className="user-active">
          <h1>3800+</h1>
          <p>USER ACTIVE</p>
        </div>
        <div className="divider">|</div>
        <div className="company">
          <h1>230+</h1>
          <p>TRUSTED BY COMPANY</p>
        </div>
        <div className="divider">|</div>
        <div className="transaction">
          <h1>$230M+</h1>
          <p>TRANSACTION</p>
        </div>
      </div>
      <div className="business-section">
        <div className="business">
          <h2>
            You do the business, <br /> we’ll handle the money.
          </h2>
          <p>
            With the right credit card, you can improve your financial life{" "}
            <br />
            by building credit, earning rewards and saving money. But <br />{" "}
            with hundreds of credit cards on the market.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="business-two">
          <div className="business-star">
            <div>
              <img className="business-img" src={myStar} />
            </div>
            <div>
              <h3>Reward</h3>
              <p>
                The best credit cards offer some tantalizing <br /> combinations
                of promotions and prizes
              </p>
            </div>
          </div>

          <div className="business-secured">
            <div>
              <img className="business-img" src={mySecured} />
            </div>
            <div>
              <h3>100% Secured</h3>
              <p>
                We take proactive steps make sure your <br /> information and
                transactions are secure.
              </p>
            </div>
          </div>

          <div className="business-transfer">
            <div>
              <img className="business-img" src={myTransfer} />
            </div>
            <div>
              <h3>Balance Transfer</h3>
              <p>
                A balance transfer credit card can save <br /> you a lot of
                money in interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="billing-section">
        <div className="billing-section-description">
          <div className="paypal">
            <img className="paypal-img" src={myPaypal} />
          </div>
          <div className="last-transaction">
            <img className="transaction-img" src={myTransaction} />
          </div>
          <div className="btn-payment">
            <button>Great! Your Payment is succesfully.</button>
          </div>
        </div>
        <div className="billing">
          <h2>
            Easily control your <br /> billing & invoicing.
          </h2>
          <p>
            Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
            ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor
            integer platea placerat.
          </p>
          <div className="apple-play">
            <div>
              <img src={myApple} />
            </div>
            <div>
              <img src={myGoogle} />
            </div>
          </div>
        </div>
      </div>
      <div className="credit-card-section">
        <div className="credit-card-description">
          <h2>
            Find a better card deal <br /> in few easy steps.
          </h2>
          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. <br /> Aliquet
            quis aliquet eget mauris tortor.ç Aliquet <br />
            ultrices ac, ametau.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="credit-card-overflow">
          <div className="ellipse-big">
            <img src={myEllipse1} />
          </div>
          <div className="ellipse-medium">
            <img src={myEllipse2} />
          </div>
          <div className="ellipse-small">
            <img src={myEllipse3} />
          </div>
          <div>
            <div className="pay-method">
              <img src={myPay} />
            </div>
            <div className="scan-cc">
              <img className="scan-img" src={myCredit} />
            </div>
            <div className="online-analysis">
              <img className="analysis-img" src={myOnline} />
            </div>
          </div>
        </div>
      </div>
      <div className="comment-session">
        <div className="comment-session-description">
          <h2 className="comment-people">
            What people are <br /> saying about us
          </h2>
          <p className="comment-description">
            Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.
          </p>
        </div>
        <div className="comments">
          <div className="testimonial-card first-card">
            <div>
              <img className="quotes-img" src={myQuote} />
            </div>
            <p className="comments-comments">
              Money is only a tool. It will take <br /> you wherever you wish,
              but it <br />
              will not replace you as the <br /> driver.
            </p>
            <div className="facecard-comment">
              <div>
                <img className="facecard-img" src={myHerman} />
              </div>
              <div>
                <h4 className="comments-comments">Herman Jensen</h4>
                <p className="card-title">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card second-card">
            <div>
              <img className="quotes-img" src={myQuote} />
            </div>
            <p className="comments-comments">
              Money makes your life easier. If <br /> you're lucky to have it,
              you're <br />
              lucky.
            </p>
            <div className="facecard-comment">
              <div>
                <img className="facecard-img" src={mySteve} />
              </div>
              <div>
                <h4 className="comments-comments">Steve Mark</h4>
                <p className="card-title">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card third-card ">
            <div>
              <img className="quotes-img" src={myQuote} />
            </div>
            <p className="comments-comments">
              It is usually people in the <br /> money business, finance, and{" "}
              <br />
              international trade that are <br /> really rich.
            </p>
            <div className="facecard-comment">
              <div>
                <img className="facecard-img" src={myKenn} />
              </div>
              <div>
                <h4 className="comments-comments">Kenn Gallagher</h4>
                <p className="card-title">Founder & Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="utility">
        <img className="airbnb-img" src={myAirbnb} />
      </div>
      <div className="service-section">
        <div>
          <h2 className="comment-people">Let’s try our service now!</h2>
          <p className="card-title">
            Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.
          </p>
        </div>
        <div>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </main>
  );
};
