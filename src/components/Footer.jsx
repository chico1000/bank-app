import logo from "../assets/hoobank.png";
import copyright from "../assets/copyright.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-session">
        <div>
          <img className="hoobank-logo" src={logo} />
          <p className="sub-content">
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <div>
          <p className="sub-header">Usefull Links</p>
          <div className="sub-content">
            <p>Content</p>
            <p>How it Works</p>
            <p>Create</p>
            <p>Explore</p>
            <p>Terms & Services</p>
          </div>
        </div>
        <div>
          <p className="sub-header">Community</p>
          <div className="sub-content">
            <p>Help Center</p>
            <p>Partners</p>
            <p>Suggestions</p>
            <p>Blog</p>
            <p>Newsletters</p>
          </div>
        </div>
        <div className="sub-content">
          <p className="sub-header">Partner</p>
          <div>
            <p>Our Partner</p>
            <p>Become a Partner</p>
          </div>
        </div>
      </div>
      <hr className="border" />
      <div className="end">
        <div className="copyright-prop">
          <div>
            <p className="sub-content">Copyright</p>
          </div>
          <div>
            <img className="copyright-img" src={copyright} />
          </div>
          <p className="sub-content">2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="social-media-logo">
          <img src={instagram} />
          <img src={facebook} />
          <img src={twitter} />
          <img src={linkedin} />
        </div>
      </div>
    </footer>
  );
};
