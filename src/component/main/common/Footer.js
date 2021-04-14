import React from "react";
import { Container } from "react-bootstrap";
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
function Footer() {
  return (
    <div className="footer">
      <svg viewBox="0 0 1440 181" preserveAspectRatio="none" style={{ height: 100, width: "100%" }} className='css-1d3w5wq' >
        <path style={{ fill: "rgb(255 255 255)", stroke: "rgb(255 255 255)", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
        </path>

      </svg>
      <Container>
        <div className="footer-content">

          <div className=" first-col ">
            {/* start First column  */}
            <h2 className="logo">Future Company</h2>
            <p className="footer-des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              odio dolorum porro vel sequi amet?
            </p>
            <ul className="footer-social-media">
              <li>
                <a >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* End First column  */}
          <div className="d-col ">
            {/* start Second column  */}
            <div className="explore-content">
              <h3>Explore</h3>
              <ul className="Explore-item">
                <li>
                  <a >Home</a>
                </li>
                <li>
                  <a >About US</a>
                </li>
                <li>
                  <a >Our Works</a>
                </li>

                <li>
                  <a >Contact US</a>
                </li>
              </ul>
            </div>
            {/* End Second column  */}
          </div>
          <div className="d-col ">
            <h3>contact us</h3>
            {/* start Third column  */}
            <ul className="contact-item">
              <li>
                <LocationOnIcon />
                <a >Harthiya,Baghdad,Iraq</a>
              </li>
              <li>
                <PhoneIcon />
                <a >+964 1234556</a>
              </li>
              <li>
               <MailIcon />
                <a >info@Future-Company</a>
              </li>
            </ul>
            {/* start Third column  */}
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Footer;
